import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout/Layout';
import LoginPage from './components/LoginPage/LoginPage';
import muiTheme from './config/theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <LoginPage />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
