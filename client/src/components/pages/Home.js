import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to TravelPlanner</h1>
      <p className="mb-4">Plan your next adventure with ease!</p>
      <Link to="/create-plan" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create a Travel Plan
      </Link>
    </div>
  );
};

export default Home;