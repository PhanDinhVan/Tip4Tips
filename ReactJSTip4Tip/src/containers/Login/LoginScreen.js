import React, { Component } from 'react';

import Wallpaper from '../../components/Layout/Wallpaper/Wallpaper';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            auths: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {

        event.preventDefault();
        const self = this;
        try {
            axios({
                method: 'post',
                url: 'http://localhost:8000/login_react',
                data: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
                .then(function (response) {
                    //handle success
                    console.log(response.data);
                    // var array = response.data;
                    // console.log(array[0].remember_token);
                    if (response.data === 0) {
                        alert("E-mail or password incorrect");
                    } else if (response.data.email.length > 0) {
                        self.setState({
                            auths: true
                        })
                        // set value token
                        // localStorage.setItem("token", response.data.remember_token)
                        // console.log(localStorage.getItem("token"))
                    } else {
                        alert("E-mail or password incorrect");
                    }
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });

        } catch (e) {
            alert(e.message);
        }
    }

    render() {
        let redirect = null;
        if (this.state.auths) {
            redirect = <Redirect to="/home" />;
        }
        return (
            <Wallpaper>
                {redirect}
                <Logo />
                <Form onChanged={this.handleChange}
                    emailed={this.state.email}
                    passworded={this.state.password} />
                <ButtonSubmit disabled={!this.validateForm()}
                    clicked={this.handleSubmit} />
                <SignupSection />
            </Wallpaper>

        );
    }
}

export default LoginScreen;