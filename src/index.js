import React from 'react';
import ReactDOM from 'react-dom';
import Reddit from './Reddit'
import Post from './Post'
import Config from './Config'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <Reddit />
  <Post />
  <Config />
  </React.StrictMode>,
  document.getElementById('root')
);
