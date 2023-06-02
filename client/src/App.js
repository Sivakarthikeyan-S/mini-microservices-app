import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
