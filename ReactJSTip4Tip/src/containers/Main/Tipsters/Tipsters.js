import React, { Component } from 'react';

import classes from './Tipsters.css';
import List from './List';

class Tipsters extends Component {
    render() {
        return (
            <div className={classes.Tipsters} >
                <h1>
                    <a href="#">
                        <span className="glyphicon glyphicon-eye-open"> Tipsters </span>
                    </a>
                </h1>
                <List />
            </div>

        )
    }
}

export default Tipsters;