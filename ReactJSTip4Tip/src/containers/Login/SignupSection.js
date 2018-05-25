import React, { Component } from 'react';

import classes from './Login.css';

class SignupSection extends Component {
    render() {
        return(
            <div className={classes.SignupSection} >
                <br />
                <a href="/register" className={classes.Register} >
                    Register
                </a>
                <a href="/forgot_password" className={classes.ForgotPassword} >
                    Forgot your password?
                </a>
            </div>
            
        )
    }
}

export default SignupSection;