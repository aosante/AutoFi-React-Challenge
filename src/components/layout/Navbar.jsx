import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center md:justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-bold text-xl">
            Auto<span className="text-blue-500">Fi</span>
          </span>
        </Link>
      </div>
      <div className="w-full hidden md:block sm:flex sm:items-center sm:w-auto">
        <Link
          to="/posts"
          className="inline-block text-sm px-4 py-2 leading-none rounded text-teal-200 border-white hover:border-transparent hover:text-blue-500 mt-4 md:mt-0"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
