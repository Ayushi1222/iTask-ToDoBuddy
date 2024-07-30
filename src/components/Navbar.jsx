import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo2.jpg'; // Adjust the path as needed

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-blue-950 py-4'>
      <div className='flex px-4'>
        <Link to="/" className='flex items-center'>
          <img src={logo} alt="iTask Logo" className="h-8 w-auto" /> {/* Adjust height as needed */}
        </Link>
      </div>
      <ul className='flex px-8 gap-4 text-white text-xl'>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link to="/">Home</Link>
        </li>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link to="/todo">My Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}