import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout/Layout';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import muiTheme from './config/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <LoginContainer />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
