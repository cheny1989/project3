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
                    <div className="enjoyTitle">Register and Enjoy</div>
                    <label>First Name</label>
                    <br />
                    <InputRegister
                        type="text"
                        id="firstName"
                    />
                    <br />
                    <label>Last Name</label>
                    <br />
                    <InputRegister
                        type="text"
                        id="lastName"
                    />
                    <br />
                    <label>User Name</label>
                    <br />
                    <InputRegister
                        type="text"
                        id="userName"
                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <InputRegister
                        type="password"
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