import React from 'react';

const Comment = ({ comment: { name, email, body } }) => {
  return (
    <div className="mx-auto w-10/12 md:w-7/12 flex flex-col py-8 px-10 bg-gray-200 mt-8 rounded-lg shadow-xl">
      <p className="font-bold text-gray-800 my-5 text-center md:text-left text-md">
        {body}
      </p>
      <p>
        By: <span className="text-gray-600">{name}</span>
      </p>
      <p>
        Contact @: <span className="text-gray-600">{email}</span>
      </p>
    </div>
  );
};

export default Comment;
