import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Register from "./Register";
import $ from "jquery";
// import { use } from '../../../server/ApiRouter';
// import MainOnePageApplication from "../mainPage/MainOnePageApplication";
// import Test from "../mainPage/Test"


// https://www.youtube.com/watch?v=I3PC8pV1SBM

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            user: [],
            login: false,
            store: null,
            // token: ''
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

    storeCollectore() {
        let store = JSON.parse(localStorage.getItem('login'));
        if (store && store.login) {
            this.setState({ login: true, store: store });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        fetch("/api/apiuser/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                response.json().then((result) => {
                    console.log("result", result);

                    const resultUserName = result.message;
                    alert(resultUserName);
                    console.log(resultUserName);

                    localStorage.setItem("login", JSON.stringify({
                        login: true,
                        store: result.token,
                        userName: userName,
                        password: password,
                        token: result.token
                    }))
                    this.storeCollectore();
                    const Onlytoken = (result.token)
                    console.log(Onlytoken)
                    this.token();
                    this.getUserName();
                })
            })
    }

    getUserName = () => {
        console.log("userName: " + this.state.userName);
    }

    token = () => {
        let token = "Beraer " + this.state.store.token;
        console.log(token)
        fetch("/api/apiuser/token", {
            method: "POST",
            headers: {
                'Authorization': token
            },
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                response.json().then((result) => {
                    this.setState({
                        response: result
                    })
                    console.log("result", result);
                })
            })
    }


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

                    <div>
                        {
                            !this.state.login ?
                                <div>
                                    {/* <h1>HELLO</h1> */}
                                </div>
                                :
                                <div>
                                    <div className="helloAfterLogin">Hello {this.state.userName}</div>
                                </div>
                        }
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;