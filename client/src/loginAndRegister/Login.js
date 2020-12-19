import React, { Component } from 'react';
import InputRegister from "./InputRegister";
// import thailand from "../images/thailand.jpg";
import Register from "./Register"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        placeholder="Username"
                        id="userName"
                    />
                    <br />
                    <InputRegister
                        type="password"
                        placeholder="password"
                        id="password"
                    />
                    <br />
                    <button onClick={this.functionOfValidation} className="button_style" type="submit">Login</button>
                    <div className="notRegister">not register? Click Here!</div>
                </div>
            </form>
        )
    }
}

export default Login;