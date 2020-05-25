import React from 'react';
import ReactDOM from 'react-dom';
import Reddit from './Reddit'
import Post from './Post'
import Config from './Config'
import 'materialize-css';
import { Tabs, Tab, Container, Row } from 'react-materialize';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Tabs className='tab-options z-depth-1'>
      <Tab title="Multi Subs Listing" active>
        <Container>
          <Reddit />
        </Container>
      </Tab>
      <Tab title="Multi Posts" >
        <Container>
          <Post />
        </Container>
      </Tab>
      <Tab title="Config">
        <Container>
          <Config />
        </Container>
      </Tab>
    </Tabs>
  </React.StrictMode>,
  document.getElementById('root')
);
