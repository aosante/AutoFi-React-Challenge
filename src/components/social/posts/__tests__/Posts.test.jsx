import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from '../Posts';
import { findByTestAttr, checkProps } from '../../../../../test/testUtils';

const defaultProps = {
  post: {
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ],
    loading: false,
    error: false
  },
  getPosts: jest.fn()
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Posts {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(Posts, defaultProps);
});

describe('renders correctly based on props', () => {
  let wrapper = setup();
  test('renders spinner when loading', () => {
    const postProps = {
      post: { posts: [], loading: true, error: false }
    };
    wrapper = setup(postProps);
    const spinner = findByTestAttr(wrapper, 'spinner');
    expect(spinner.length).toBe(1);
  });
  test('renders error message when error is true', () => {
    const postProps = {
      post: { posts: [], loading: false, error: true }
    };
    wrapper = setup(postProps);
    const message = findByTestAttr(wrapper, 'error-message');
    expect(message.length).toBe(1);
  });
  test('renders posts section when finished loading', () => {
    wrapper = setup();
    const commentSection = findByTestAttr(wrapper, 'post-section');
    expect(commentSection.length).toBe(1);
  });
});
