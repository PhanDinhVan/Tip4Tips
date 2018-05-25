import React, { Component } from 'react';

import classes from './Leads.css';
import List from './List';

class Leads extends Component {
    render() {
        return (
            <div className={classes.Leads} >
                <h1>
                    <a href="#">
                        <span className="glyphicon glyphicon-pawn"> Leads </span>
                    </a>
                </h1>
                <List />
            </div>

        )
    }
}

export default Leads;