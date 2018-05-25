import React, { Component } from 'react';

import classes from './Leads.css';

class ViewLead extends Component {
    render() {
        return (
            <div className={classes.Leads} >
                <h1>
                    <a href="#">
                        <span className="glyphicon glyphicon-pawn"> Leads </span>
                    </a>
                </h1>
            </div>
        )
    }
}

export default ViewLead;