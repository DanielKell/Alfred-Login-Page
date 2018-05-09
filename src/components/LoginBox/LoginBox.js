import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

import {grey500, blue500} from 'material-ui/styles/colors';

const Styles = {
  floatingLabelStyle: {
    color: grey500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};



const LoginBox = () => {
    return (
        <div className="login-box-container">
            <Paper className="login-paper" zDepth={4}>
                <div className="login-field">
                    <TextField
                        floatingLabelText="Username"
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
                    />
                </div>
                <div className="login-field">
                    <TextField
                        floatingLabelText="Password"
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
                    />
                </div>
                <div className="login-button-container">
                    <RaisedButton label="Login" className="login-button"/>
                </div>
            </Paper>
        </div>
    );
}

export default LoginBox;