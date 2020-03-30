import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';
import Spinner from '../../layout/Spinner';
import { getPosts } from '../../../actions/post';

export const Posts = ({ getPosts, post: { posts, loading, error } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading && !error ? (
    <Spinner data-test="spinner" />
  ) : error ? (
    <p data-test="error-message" className=" text-red-700">
      Woops! Something went wrong. Server may be down.
    </p>
  ) : (
    <div data-test="post-section">
      <h1 className="font-bold text-gray-800 my-5 text-center text-4xl">
        Posts
      </h1>
      {posts.map(post => (
        // pass in id as prop
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
