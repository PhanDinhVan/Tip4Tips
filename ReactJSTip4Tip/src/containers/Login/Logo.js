import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

import classes from './Login.css';


import logoImg from '../../assets/images/logo.png';

class Logo extends Component {
    render() {
        return (
            <div className={classes.ViewContainer} >
                <Image src={logoImg} className={classes.ImageLogo} />
                <div className={classes.TextLogin} >Tip4Tips</div>
            </div>
        );
    }
}

export default Logo;