import React, { Component } from 'react';

import classes from './Register.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Form extends Component {

    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className={classes.TextRegister} >register</div>
                    <TextField
                        className={classes.FormTextField}
                        // hintText="Username"
                        floatingLabelText="Username"
                        type="text"
                    /><br />
                    <TextField
                        className={classes.FormTextField}
                        // hintText="E-Mail Address"
                        floatingLabelText="E-Mail"
                        type="text"
                    /><br />
                    <TextField
                        className={classes.FormTextField}
                        // hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                    <TextField
                        className={classes.FormTextField}
                        // hintText="Confirm Password"
                        floatingLabelText="Confirm"
                        type="password"
                    /><br />
                    <SelectField
                        floatingLabelText="Region"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoWidth={true}
                        className={classes.FormTextField}
                        labelStyle={{color:'white'}}
                    >
                        <MenuItem value={1} primaryText="Please select your region" />
                        <MenuItem value={2} primaryText="Ha Noi" />
                        <MenuItem value={3} primaryText="Ho Chi Minh" />
                        <MenuItem value={4} primaryText="Da Nang" />
                        <MenuItem value={5} primaryText="Nha Trang" />
                    </SelectField>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Form;