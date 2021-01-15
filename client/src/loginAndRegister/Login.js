import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Register from "./Register";
import $ from "jquery";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    clearInput = () => {
        $('#userName').val('')
        $('#password').val('')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;

        this.setState({
            userName: '',
            password: ''
        });

        this.clearInput();

        var rbody = {
            userName: userName,
            password: password,
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rbody)
        };
        fetch('/api/apiuser/login', requestOptions)
            .then(r => r.json())
            .then(res => this.setState({ res }))
            
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="input_style">
                <div className="widowRegisterAndLogin">
                    <div className="enjoyTitle">Login and Enjoy</div>

                    <label htmlFor="userName">User Name: </label>
                    <br />
                    <input type="text" id="userName" name="userName" onChange={this.handleChange} required={true} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <br />
                    <input type="password" id="password" name="password" onChange={this.handleChange} required={true} />
                    <br />
                    <button className="button_style" type="submit">Login</button>

                    <HashRouter>
                        <br />
                        <div className="notRegister"><NavLink to="/Register">Not Register? Click Here</NavLink></div>
                        <Route path="/Register" component={Register} />
                    </ HashRouter>
                </div>
            </form>
        )
    }
}

export default Login;