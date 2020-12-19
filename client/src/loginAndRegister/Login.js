import React, { Component } from 'react';
import InputRegister from "./InputRegister";
import { Route, NavLink, HashRouter } from "react-router-dom";
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
                <div className="enjoyTitle">Login and Enjoy</div>
                <label>Username</label>
                <br />
                    <InputRegister
                        type="text"
                        id="userName"
                    />
                <br />
                <label>Passoword</label>
                <br />
                    <InputRegister
                        type="password"
                        id="password"
                    />
                    <br />
                    <button onClick={this.functionOfValidation} className="button_style" type="submit">Login</button>

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