import React, { Component } from 'react';

import classes from './Login.css'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonSubmit extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <br /> <br />
                    <RaisedButton label="Login" 
                        secondary={true} 
                        className={classes.ButtonLogin}
                        onClick={this.props.clicked}
                        disabled={this.props.disabled} />
                </div>
            </MuiThemeProvider>

        )
    }
}

export default ButtonSubmit;