import React, { Component } from 'react';

import classes from './Home.css';
import Cards from '../Cards/Cards';

class Home extends Component {
    render() {
        return (
            <div className={classes.Home} >
                <h1>
                    <a href="#">
                        <span className="glyphicon glyphicon-home"> Home </span>
                    </a>
                </h1>
                <Cards />
            </div>
        )
    }
}

export default Home;