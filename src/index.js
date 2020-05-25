import React from 'react';
import ReactDOM from 'react-dom';
import Reddit from './Reddit'
import Post from './Post'
import Config from './Config'
import 'materialize-css';
import { Tabs, Tab, Container } from 'react-materialize';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';

import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange,
  },
  status: {
    danger: 'red',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Tabs className='tab-options z-depth-1'>
          <Tab key={1} title="Multi Subs Listing" active>
            <Container>
              <Reddit />
            </Container>
          </Tab>
          <Tab key={2} title="Multi Posts" >
            <Container>
              <Post />
            </Container>
          </Tab>
          <Tab key={3} title="Config">
            <Container>
              <Config />
            </Container>
          </Tab>
        </Tabs>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
