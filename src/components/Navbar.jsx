import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-blue-950 py-4'>
      <div className='flex px-4'>
        <Link to="/" className='text-white font-bold text-2xl'>iTask</Link>
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