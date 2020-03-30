import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { addComment } from '../../../actions/comment';

export const AddComments = ({ postId, addComment }) => {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    body: ''
  });
  const { name, email, body } = commentData;

  const onChange = e => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      id: uuid(),
      postId,
      ...commentData
    };
    addComment(data);
    setCommentData({ name: '', email: '', body: '' });
  };

  return (
    <form
      onSubmit={e => onSubmit(e)}
      className=" w-9/12 md:w-5/12 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="name"
          value={name}
          type="text"
          placeholder="Username"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Comment
        </label>
        <textarea
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="body"
          value={body}
          placeholder="Your comment..."
          onChange={e => onChange(e)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Comment
      </button>
    </form>
  );
};

AddComments.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(AddComments);
