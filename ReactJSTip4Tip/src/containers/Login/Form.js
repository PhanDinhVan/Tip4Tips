import React, { Component } from 'react';

import classes from './Login.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Form extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        id="email"
                        className={classes.FormTextField}
                        // hintText="Email Field"
                        floatingLabelText="Email"
                        type="email"
                        value={this.props.emailed}
                        onChange={this.props.onChanged}
                    /><br />
                    <TextField
                        id="password"
                        className={classes.FormTextField}
                        // hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        value={this.props.passworded}
                        onChange={this.props.onChanged}
                    /><br />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Form;