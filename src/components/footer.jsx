import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">iTask</h3>
            <p className="text-sm">Organize your life, one task at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:text-blue-300">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">My Tasks</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">About Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 iTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}