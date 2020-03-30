# AutoFi ReactJS Challenge

This is a React application that consumes the posts and comments from the jsonplaceholder API.

A list of posts is rendered, and when a post is clicked, the comments related to that post are shown. Comments can also be added to a post.

# Design Decisions

This project has been structured based on its size, semantics, and state management.

## Folder structure

React components have been put inside a components folder, in which sub folders have been created based on semantics. Everything related to posts has been
put inside the posts folder. Same thing goes for comments.

Actions and reducers folders have been created seperately due to application size. All reducers and actions go inside the reducers and actions folders respectively.

For a bigger app, this sort of structure is not ideal, and an approach like the ducks file approach might be a better fit. In this sort of approach, reducers, types, thunks and action creators are grouped in the same duck file, alongside its relevant component. This is a much more scalable way to structure files.

## Redux

For state management, Redux and its typical Flux-like pattern is being used.

Just like with React components, reducers and actions have been separated into different files based on the two entities present in this application: posts and comments.

There is one reducer for posts and one for comments, same with action files.

Redux thunk was used to handle dispatching actions both conditionally and asynchronously inside the same function.

# Quick Start

### Install server dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

### Run tests

```bash
npm test
```

## Info

### Author

Andrés Osante
