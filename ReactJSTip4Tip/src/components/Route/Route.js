import React, { Component } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../containers/Login/LoginScreen';
import Register from '../../containers/Register/RegisterScreen';
import ForgotPassword from '../../containers/ForgotPassword/ForgotPasswordScreen';
import Main from '../../containers/Main/Main';


class Routes extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgot_password" component={ForgotPassword} />
                    <Route path="/home" component={Main} />
                    <Route path="/leads" component={Main} />
                    <Route path="/tipsters" component={Main} />
                    <Route path="/edit_lead" component={Main} />
                    <Route path="/view_lead" component={Main} />
                    <Route path="/edit_tipster" component={Main} />
                </div>
            </Router>
        )
    }
}

export default Routes;