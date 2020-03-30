import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Spinner from '../../layout/Spinner';
import { getComments } from '../../../actions/comment';
import AddComments from './AddComments';

export const Comments = ({
  match: {
    params: { postId }
  },
  getComments,
  comment: { comments, loading, error }
}) => {
  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);
  return loading && !error ? (
    <Spinner data-test="spinner" />
  ) : error ? (
    <p data-test="error-message" className="text-red-700">
      Woops! Something went wrong. Server may be down.
    </p>
  ) : (
    <div data-test="comment-section">
      <Link
        className="w-20 text-center mx-auto text-lg px-4 py-2 bg-gray-800 rounded text-white  hover:border-transparent hover:text-blue-500 hover:bg-white"
        to="/posts"
      >
        Go Back
      </Link>
      <AddComments postId={postId} />
      <h1 className=" font-bold text-gray-800 my-5 text-center text-4xl">
        Comments
      </h1>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comment: state.comment
});

export default connect(mapStateToProps, { getComments })(Comments);
