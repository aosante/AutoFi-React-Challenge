import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="mx-auto w-10/12 md:w-7/12 flex flex-col py-8 px-10 bg-gray-200 mt-8 rounded-lg shadow-xl">
      <div>
        <h1 className="font-bold text-gray-800 my-5 text-center md:text-left text-xl">
          {title}
        </h1>
        <p>{body}</p>
      </div>
      <Link
        className="font-bold cursor-pointer text-blue-500 mt-5"
        to={`/comments/${id}`}
      >
        View Comments
      </Link>
    </div>
  );
};

export default Post;
