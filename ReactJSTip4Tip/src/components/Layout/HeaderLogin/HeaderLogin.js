import React, { Component } from 'react';

import classes from './HeaderLogin.css';
import Logo from '../../../assets/images/logo2.png';

class Sidebar extends Component {
    render() {
        return (
            <header className={classes.Sidebar} >
                <a href="/" >
                    <span
                        className="glyphicon glyphicon-chevron-left"
                        style={{ fontSize: '30px' }}
                    ></span>
                </a>

                <div className={classes.Logo} >
                    <img src={Logo} alt="Navigation" />
                </div>
            </header>
        )
    }
}

export default Sidebar;