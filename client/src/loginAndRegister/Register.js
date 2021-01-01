import React, { Component } from 'react';
// import InputRegister from "./InputRegister"
import $ from "jquery"


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            userName: null,
            password: null
        }
    }

    clearInput = () => {
        $('#firstName').val('')
        $('#lastName').val('')
        $('#userName').val('')
        $('#password').val('')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        // this.props.Register(this.state);
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;

        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        })

        this.clearInput();

        var rbody = {
            firstName: firstName,
            lastName: lastName,
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
        fetch('/api/api/apiuser', requestOptions)
            .then(r => r.json())
            .then(res => this.setState({ res }))

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input_style">
                <div className="widowRegisterAndLogin">
                    <div className="enjoyTitle">Register and Enjoy</div>
                    <label htmlFor="firstName">First Name: </label>
                    <br />
                    <input type="text" id="firstName" onChange={this.handleChange} required={true} />
                    <br />
                    <label htmlFor="lastName">Last Name: </label>
                    <br />
                    <input type="text" id="lastName" onChange={this.handleChange} required={true} />
                    <br />
                    <label htmlFor="userName">User Name: </label>
                    <br />
                    <input type="text" id="userName" onChange={this.handleChange} required={true} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <br />
                    <input type="password" id="password" onChange={this.handleChange} required={true}/>
                    <br />
                    <button className="button_style" type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default Register;