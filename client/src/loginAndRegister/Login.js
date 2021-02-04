import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Register from "./Register";
import $ from "jquery";
import MainOnePageApplication from "../mainPage/MainOnePageApplication";


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
                    console.log(resultUserName);

                    if (resultUserName === "Username or Password failed") {
                        const USERNAME_OR_PASSWORD_FAILED = document.getElementById("showAndHideMessage");
                        USERNAME_OR_PASSWORD_FAILED.innerHTML = "Username or Password failed";
                        USERNAME_OR_PASSWORD_FAILED.style.background = "red";
                        USERNAME_OR_PASSWORD_FAILED.style.paddingTop = "5px";
                        USERNAME_OR_PASSWORD_FAILED.style.paddingBottom = "5px";
                        USERNAME_OR_PASSWORD_FAILED.style.marginTop = "20px";
                        // setTimeout(function () {
                        //     document.getElementById("showAndHideMessage").innerHTML = "";
                        // }, 5000);

                    } else if (resultUserName === "You are now login!") {
                        const LOGIN = document.getElementById("showAndHideMessage");
                        LOGIN.innerHTML = "You are now login!";
                        LOGIN.style.background = "#00cc00";
                        LOGIN.style.paddingTop = "5px";
                        LOGIN.style.paddingBottom = "5px";
                        LOGIN.style.marginTop = "20px";
                        // setTimeout(function () {
                        //     document.getElementById("showAndHideMessage").innerHTML = "";
                        // }, 5000);
                    } else {
                        const NOT_EXISTS = document.getElementById("showAndHideMessage");
                        NOT_EXISTS.innerHTML = "Username or Password failed";
                        NOT_EXISTS.style.background = "red";
                        NOT_EXISTS.style.paddingTop = "5px";
                        NOT_EXISTS.style.paddingBottom = "5px";
                        NOT_EXISTS.style.marginTop = "20px";
                        // setTimeout(function () {
                        //     document.getElementById("showAndHideMessage").innerHTML = "";
                        // }, 5000);
                    }

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
                })
            })
    }

    token = () => {
        let token = "Beraer " + this.state.store.token;
        if (token === "Beraer " + undefined) {
            console.log("Error")
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
                        console.log("findUserName: " + findUserName)
                        // {filterUser.map(s =><MainOnePageApplication key={s.id} item={s} />)}
                    }
                })
            })
    }



    render() {

        return (
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
        )
    }
}

export default Login;