import React, { Component } from 'react';
import InputRegister from "./InputRegister"


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        }
    }
    render() {
        return (
            <form className="input_style">
                <div className="widowRegisterAndLogin">
                    <InputRegister
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                    />
                    <br />
                    <InputRegister
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                    />
                    <br />
                    <InputRegister
                        type="text"
                        placeholder="User Name"
                        id="userName"
                    />
                    <br />
                    <InputRegister
                        type="password"
                        placeholder="password"
                        id="password"
                    />
                    <br />
                    <button className="button_style" type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default Register;