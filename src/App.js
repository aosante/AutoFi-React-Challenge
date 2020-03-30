import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/layout/Welcome';
import Posts from './components/social/posts/Posts';
import Comments from './components/social/comments/Comments';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <section className="container text-center md:text-left my-10 mx-auto h-full">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/comments/:postId" component={Comments} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

export default App;
