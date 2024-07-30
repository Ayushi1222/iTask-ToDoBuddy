import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

export default function Todobox() {

  const [todo, setTodo] = useState("");
  const [todoHeading, setTodoHeading] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    setTodos([...todos, { todo, heading: todoHeading, isCompleted: false }]);
    setTodo("");
    setTodoHeading("");
    saveToLS();
  };

  const handleEdit = (e, i) => {
    const editTodo = todos.find((_, ind) => ind === i);
    setTodo(editTodo.todo);
    setTodoHeading(editTodo.heading);
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

  const handleHeadingChange = (e) => {
    setTodoHeading(e.target.value);
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteAllDoneTasks = () => {
    const newTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(newTodos);
    saveToLS();
  };

  const deleteAllTasks = () => {
    setTodos([]);
    saveToLS();
  };

  const filteredTodos = todos.filter(todo => 
    (todo.heading?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     todo.todo?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (showFinished || !todo.isCompleted)
  );  

  return (
    <div className="container mx-auto my-8 p-6 rounded-xl bg-violet-100 shadow-lg max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-violet-800">My Todo List</h1>
      <div className="flex-grow relative">
          <input 
            type="text" 
            placeholder="Search tasks..." 
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 pl-8 rounded-lg border-2 border-violet-300 focus:outline-none focus:border-violet-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      <div className="mb-6">
        <h2 className='font-semibold text-xl mb-2 text-violet-700'>Add New Task</h2>
        <input 
          onChange={handleHeadingChange} 
          value={todoHeading} 
          type="text" 
          className='w-full rounded-lg p-2 border-2 border-violet-300 focus:outline-none focus:border-violet-500 mb-2' 
          placeholder="Enter task heading..."
        />
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
            disabled={todo.length < 1 || todoHeading.length < 1} 
            className='bg-violet-600 hover:bg-violet-700 p-2 text-white rounded-r-lg font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <FaPlus className="mr-2" /> Add
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <button 
          onClick={toggleFinished}
          className={`ml-4 px-4 py-2 rounded-lg font-semibold ${showFinished ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {showFinished ? 'Hide Finished' : 'Show Finished'}
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <button 
          onClick={deleteAllDoneTasks} 
          className="w-[48%] bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete Done Tasks
        </button>
        <button 
          onClick={deleteAllTasks} 
          className="w-[48%] bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete All Tasks
        </button>
      </div>

      <div className="space-y-4">
        {filteredTodos.length === 0 && <div className="text-gray-500 italic">No tasks found.</div>}
        {filteredTodos.map((item, i) => (
          <div key={i} className="bg-white p-3 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <input 
                name={i.toString()} 
                onChange={handleCheckBox} 
                type="checkbox" 
                checked={item.isCompleted} 
                className="mr-3"
              />
              <h3 className={`font-semibold ${item.isCompleted ? "line-through text-gray-500" : "text-gray-800"}`}>
                {item.heading}
              </h3>
            </div>
            <div className="flex items-center">
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
          </div>
        ))}
      </div>
    </div>
  );
}