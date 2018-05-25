import React, { Component } from 'react';

import Wallpaper from '../../components/Layout/Wallpaper/Wallpaper';
import HeaderLogin from '../../components/Layout/HeaderLogin/HeaderLogin';
import Form from './Form';
import ButtonRegister from './ButtonRegister';

class RegisterScreen extends Component {
    render() {
        return (
            <Wallpaper>
                <HeaderLogin />
                <Form />
                <ButtonRegister />
            </Wallpaper>
        )
    }
}

export default RegisterScreen;