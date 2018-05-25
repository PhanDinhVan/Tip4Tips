import React, { Component } from 'react';

import classes from './ForgotPassword.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className={classes.TextForgotPassword} >forgot password</div>
                    <TextField
                        className={classes.FormTextField}
                        // hintText="E-Mail Address"
                        floatingLabelText="E-Mail"
                        type="text"
                    /><br /> <br/>
                    <RaisedButton 
                        buttonStyle={{borderRadius: '10px'}} 
                        label="send password reset link" secondary={true}
                        className={classes.ButtonForgotPassword} />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Form;