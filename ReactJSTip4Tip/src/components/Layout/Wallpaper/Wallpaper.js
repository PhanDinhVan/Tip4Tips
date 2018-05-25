import React, { Component } from 'react';

import classes from './Wallpaper.css';

class Wallpaper extends Component {
    render() {
        return (
            <div className={classes.Wallpaper} >
                {this.props.children}
            </div>
        );
    }
}

export default Wallpaper;