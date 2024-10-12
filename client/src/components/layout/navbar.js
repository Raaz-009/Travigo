import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">TravelPlanner</Link>
        <ul className="flex space-x-4">
          <li><Link to="/register" className="text-white">Register</Link></li>
          <li><Link to="/login" className="text-white">Login</Link></li>
          <li><Link to="/create-plan" className="text-white">Create Plan</Link></li>
          <li><Link to="/my-plans" className="text-white">My Plans</Link></li>
          <li><Link to="/blog" className="text-white">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;