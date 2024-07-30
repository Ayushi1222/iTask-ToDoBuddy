import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function Todobox() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const parsedTodos = JSON.parse(todoString);
      setTodos(parsedTodos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleEdit = (e, i) => {
    const editTodo = todos.find((_, ind) => ind === i);
    setTodo(editTodo.todo);
    const newTodos = todos.filter((_, ind) => ind !== i);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (i) => {
    const newTodos = todos.filter((_, ind) => ind !== i);
    setTodos(newTodos);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    const id = parseInt(e.target.name);
    const newTodos = todos.map((item, index) => 
      index === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveToLS();
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <div className="container flex-grow mx-auto my-8 p-6 rounded-xl bg-violet-100 shadow-lg max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-violet-800">My Todo List</h1>
      
      <div className="mb-6">
        <h2 className='font-semibold text-xl mb-2 text-violet-700'>Add New Task</h2>
        <div className="flex">
          <input 
            onChange={handleChange} 
            value={todo} 
            type="text" 
            className='flex-grow rounded-l-lg p-2 border-2 border-violet-300 focus:outline-none focus:border-violet-500' 
            placeholder="Enter your task..."
          />
          <button 
            onClick={handleAdd} 
            disabled={todo.length < 1} 
            className='bg-violet-600 hover:bg-violet-700 p-2 text-white rounded-r-lg font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <FaPlus className="mr-2" /> Add
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <input 
          type="checkbox" 
          onChange={toggleFinished} 
          checked={showFinished} 
          id="showFinished" 
          className="mr-2"
        />
        <label htmlFor="showFinished" className="text-violet-700">Show Finished Tasks</label>
      </div>

      <div className="space-y-4">
        {todos.length === 0 && <div className="text-gray-500 italic">No tasks yet. Add your first task now!</div>}
        {todos.map((item, i) => {
          return (showFinished || !item.isCompleted) && (
            <div key={i} className="flex items-center bg-white p-3 rounded-lg shadow">
              <input 
                name={i.toString()} 
                onChange={handleCheckBox} 
                type="checkbox" 
                checked={item.isCompleted} 
                className="mr-3"
              />
              <div className={`flex-grow ${item.isCompleted ? "line-through text-gray-500" : "text-gray-800"}`}>
                {item.todo}
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={(e) => handleEdit(e, i)} 
                  className='text-blue-600 hover:text-blue-800'
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDelete(i)} 
                  className='text-red-600 hover:text-red-800'
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}