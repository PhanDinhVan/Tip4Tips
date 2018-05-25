import React, { Component } from 'react';

import classes from './SideBar.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wallpaper from '../Wallpaper/Wallpaper';
import { Redirect } from "react-router-dom";

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logout: false
        }
    }

    handleLogout = () => {
        this.setState({ logout: true })
    }

    render() {

        let attachedClasses = [classes.SideBar, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideBar, classes.Open];
        }

        // logout
        let redirect = null;
        if (this.state.logout) {
            redirect = <Redirect to="/" />;
        }

        return (
            <Wallpaper>
                {redirect}
                <Backdrop show={this.props.open} clicked={this.props.closed} />
                <div className={attachedClasses.join(' ')} >
                    <div>
                        <h2>menu</h2>

                        <span className="glyphicon glyphicon-remove"
                            style={{ fontSize: '30px', position: 'absolute', right: '10px', top: '20px', color: 'white' }}
                            onClick={this.props.closed}
                        ></span>
                    </div>
                    <hr />
                    <div className={classes.MenuContent} >
                        <ul>
                            <li><a href="/home" >home</a></li>
                            <li><a href="/leads" >leads</a></li>
                            <li><a href="/tipsters" >tipsters</a></li>
                        </ul>
                    </div>
                    <div className={classes.MenuBottom} >
                        <ul>
                            <li><a onClick={this.handleLogout}  >Sign off</a></li>
                        </ul>
                        <span className="glyphicon glyphicon-log-out"
                            style={{
                                fontSize: '25px',
                                position: 'absolute',
                                right: '10px', top: '22px',
                                color: 'white'
                            }}
                            onClick={this.handleLogout}   ></span>
                    </div>
                </div>
            </Wallpaper>
        )
    }
}

export default SideBar;