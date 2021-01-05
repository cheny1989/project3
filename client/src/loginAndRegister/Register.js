import React, { Component } from 'react';
// import InputRegister from "./InputRegister"
import $ from "jquery";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            userName: null,
            password: null,
            errors: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            }
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

        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length < 3 || value.length > 10
                        ? 'First name must be 3-10 characters long!'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    value.length < 3 || value.length > 10
                        ? 'Last name must be 3-10 characters long!'
                        : '';
                break;
            case 'userName':
                errors.userName =
                    value.length < 3
                        ? 'User name must be 3 characters long!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 4
                        ? 'Password must be 4 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }



    handleSubmit = () => {
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

        
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(rbody)
        // };
        // fetch('/api/api/apiuser', requestOptions)
        //     .then(r => r.json())
        //     .then(res => this.setState({ res }))

        if (validateForm(this.state.errors)) {

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

            alert("OK - valid Form")
        } else {
            alert("ERROR - invalid Form. please try again")
        }
    }

    render() {

        const { errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="input_style">
                <div className="widowRegisterAndLogin">
                    <div className="enjoyTitle">Register and Enjoy</div>
                    <label htmlFor="firstName">First Name: </label>
                    <br />
                    <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required={true} noValidate />
                    {errors.firstName.length > 0 &&
                        <span className="errorsOfValidation"><br />{errors.firstName}</span>
                    }
                    <br />
                    <label htmlFor="lastName">Last Name: </label>
                    <br />
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required={true} noValidate />
                    {errors.lastName.length > 0 &&
                        <span className="errorsOfValidation"><br />{errors.lastName}</span>
                    }
                    <br />
                    <label htmlFor="userName">User Name: </label>
                    <br />
                    <input type="text" id="userName" name="userName" onChange={this.handleChange} required={true} noValidate />
                    {errors.userName.length > 0 &&
                        <span className="errorsOfValidation"><br />{errors.userName}</span>
                    }
                    <br />
                    <label htmlFor="password">Password: </label>
                    <br />
                    <input type="password" id="password" name="password" onChange={this.handleChange} required={true} noValidate />
                    {errors.password.length > 0 &&
                        <span className="errorsOfValidation"><br />{errors.password}</span>
                    }
                    <br />
                    <button className="button_style" type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default Register;