import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-blue-950 py-4'>
        <div className='flex px-4'>
             <span className='text-white font-bold text-2xl'>iTask</span>
        </div>
        <ul className='flex px-8 gap-4  text-white text-xl '>
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className=' cursor-pointer hover:font-bold transition-all'>My Tasks</li>
        </ul>
    </nav>
  )
}
