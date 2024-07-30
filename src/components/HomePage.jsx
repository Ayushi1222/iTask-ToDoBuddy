import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaListUl, FaMobileAlt } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-violet-200 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to iTask</h1>
          <p className="text-xl text-blue-700">Organize your life, one task at a time</p>
        </header>

        <main>
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<FaCheckCircle className="text-4xl mb-4 text-green-500" />}
                title="Stay Organized"
                description="Keep track of all your tasks in one place"
              />
              <FeatureCard 
                icon={<FaListUl className="text-4xl mb-4 text-blue-500" />}
                title="Prioritize"
                description="Easily manage and prioritize your to-do list"
              />
              <FeatureCard 
                icon={<FaMobileAlt className="text-4xl mb-4 text-purple-500" />}
                title="Access Anywhere"
                description="Your tasks sync across all your devices"
              />
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Ready to get started?</h2>
            <Link 
              to="/todo" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Create Your To-Do List Now
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}