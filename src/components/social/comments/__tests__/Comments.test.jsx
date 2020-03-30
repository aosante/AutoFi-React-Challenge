import React from 'react';
import { shallow } from 'enzyme';
import { Comments } from '../Comments';
import { findByTestAttr, checkProps } from '../../../../../test/testUtils';

const defaultProps = {
  match: {
    params: { postId: 1 }
  },
  comment: {
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body:
          'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
      },
      {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body:
          'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ],
    loading: false,
    error: false
  },
  getComments: () => jest.fn()
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Comments {...setupProps} />);
};

describe('renders correctly based on props', () => {
  let wrapper = setup();
  test('renders spinner when loading', () => {
    const commentProps = {
      comment: { comments: [], loading: true, error: false }
    };
    wrapper = setup(commentProps);
    const spinner = findByTestAttr(wrapper, 'spinner');
    expect(spinner.length).toBe(1);
  });
  test('renders error message when error is true', () => {
    const commentProps = {
      comment: { comments: [], loading: false, error: true }
    };
    wrapper = setup(commentProps);
    const message = findByTestAttr(wrapper, 'error-message');
    expect(message.length).toBe(1);
  });
  test('renders comments section when finished loading', () => {
    wrapper = setup();
    const commentSection = findByTestAttr(wrapper, 'comment-section');
    expect(commentSection.length).toBe(1);
  });
});
