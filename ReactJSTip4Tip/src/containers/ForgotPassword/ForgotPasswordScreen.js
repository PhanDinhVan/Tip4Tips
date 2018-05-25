import React, { Component } from 'react';

import Wallpaper from '../../components/Layout/Wallpaper/Wallpaper';
import HeaderLogin from '../../components/Layout/HeaderLogin/HeaderLogin';
import Form from './Form';

class ForgotPassword extends Component {
    render() {
        return (
            <Wallpaper>
                <HeaderLogin />
                <Form />
            </Wallpaper>
        )
    }
}

export default ForgotPassword;