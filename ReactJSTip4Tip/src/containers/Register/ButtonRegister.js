import React, { Component } from 'react';

import classes from './Register.css'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonRegister extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <br /> <br />
                    <RaisedButton 
                        buttonStyle={{borderRadius: '10px'}} 
                        label="Register" secondary={true}
                        className={classes.ButtonRegister} />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ButtonRegister;