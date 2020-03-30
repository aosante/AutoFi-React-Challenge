import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col p-6 bg-gray-200 my-40 rounded-lg shadow-xl">
      <div className="mx-auto my-2 pt-1 h-40">
        <h1 className="text-gray-800 text-center text-4xl">Welcome!</h1>
        <p className="text-gray-600 my-3 text-xl">
          Click to go to account posts
        </p>
      </div>
      <Link
        to="/posts"
        className="w-20 text-center mx-auto text-lg px-4 py-2 bg-gray-800 rounded text-white  hover:border-transparent hover:text-blue-500 hover:bg-white"
      >
        Posts
      </Link>
    </div>
  );
};

export default Welcome;
