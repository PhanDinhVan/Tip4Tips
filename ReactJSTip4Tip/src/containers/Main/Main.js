import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from '../../components/Layout/Menu/Menu';
import Home from './Home/Home';
import Leads from './Leads/Leads';
import Tipsters from './Tipsters/Tipsters';
import EditLead from './Leads/EditLead';
import ViewLead from './Leads/ViewLead';
import EditTipster from './Tipsters/EditTipster';


class Main extends Component {

    SomeMethod = () => {
        const { pathname } = this.props.location;
        let url;
        // if(pathname === "/home") {
        //     return url = <Home />;
        // } else if(pathname === "/leads") {
        //     return url = <Leads />;
        // } else if(pathname === "/tipsters") {
        //     return url = <Tipsters />;
        // } else  if(pathname === "/edit_lead") {
        //     return url = <EditLead />;
        // } else  if(pathname === "/edit_tipster") {
        //     return url = <EditTipster />;
        // } else {
        //     return url = <ViewLead />;
        // }
        switch (pathname) {
            case "/home":
                return url = <Home />;
                break; //optional
            case "/leads":
                return url = <Leads />;
                break; //optional
            case "/tipsters":
                return url = <Tipsters />;
                break; //optional
            case "/edit_lead":
                return url = <EditLead />;
                break; //optional
            case "/edit_tipster":
                return url = <EditTipster />;
                break; //optional
            case "/view_lead":
                return url = <ViewLead />;
                break; //optional

            // you can have any number of case statements.
            default: //Optional
                return url = "/";
        }
    }

    render() {
        return (
            <Auxs>
                <Menu />
                {this.SomeMethod()}
            </Auxs>
        )
    }
}

export default Main;