import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Register from "./Register";
import $ from "jquery";
// import MainOnePageApplication from "../mainPage/MainOnePageApplication"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            user: [],
            userToekn: [],
            login: false,
            store: null,
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
                    console.log(resultUserName);

                    if (resultUserName === "Username or Password failed") {
                        const USERNAME_OR_PASSWORD_FAILED = document.getElementById("showAndHideMessage");
                        USERNAME_OR_PASSWORD_FAILED.innerHTML = "Username or Password failed";
                        USERNAME_OR_PASSWORD_FAILED.style.background = "red";
                        USERNAME_OR_PASSWORD_FAILED.style.paddingTop = "5px";
                        USERNAME_OR_PASSWORD_FAILED.style.paddingBottom = "5px";
                        USERNAME_OR_PASSWORD_FAILED.style.marginTop = "20px";

                    } else if (resultUserName === "You are now logged!") {
                        const LOGIN = document.getElementById("showAndHideMessage");
                        LOGIN.innerHTML = "You are now logged!";
                        LOGIN.style.background = "#00cc00";
                        LOGIN.style.paddingTop = "5px";
                        LOGIN.style.paddingBottom = "5px";
                        LOGIN.style.marginTop = "20px";

                    } else {
                        const NOT_EXISTS = document.getElementById("showAndHideMessage");
                        NOT_EXISTS.innerHTML = "Username or Password failed";
                        NOT_EXISTS.style.background = "red";
                        NOT_EXISTS.style.paddingTop = "5px";
                        NOT_EXISTS.style.paddingBottom = "5px";
                        NOT_EXISTS.style.marginTop = "20px";
                    }

                    localStorage.setItem("login", JSON.stringify({
                        login: true,
                        store: result.token,
                        userName: userName,
                        password: password,
                        token: result.token
                    }))
                    this.storeCollectore();
                    const Onlytoken = (result.token);
                    console.log(Onlytoken);
                    this.token();
                })
            })
    }

    token = () => {
        let token = "Beraer " + this.state.store.token;
        if (token === "Beraer " + undefined) {
            console.log("Error - Login");
        }
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
                    console.log({ result: result.authData });

                    const returnUserName = result.message;
                    console.log(returnUserName)
                    if (returnUserName) {
                        const findUserName = result.authData.userName
                        console.log("findUserName: " + findUserName);

                        this.setState({
                            user: [findUserName]
                        });

                        const sec = this.state.user;
                        console.log("sec: " + sec);


                        const count = this.state.user.push();
                        console.log(count);
                        console.log(this.state.user);

                    }
                })
            })
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="input_style">
                    <div className="widowRegisterAndLogin">
                        <div className="enjoyTitle">Login and Enjoy</div>

                        <label htmlFor="userName">Username: </label>
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
                        <div id="showAndHideMessage"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;