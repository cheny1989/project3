import React, { Component } from 'react';
import "./loginAndRegister.css"
import Login from "./Login";
import Register from "./Register";
import AboutMe from "../aboutMe/AboutMe"
import { Route, NavLink, HashRouter } from "react-router-dom";



class MainOnePAgeApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <div className="header"></div>
                        <ul className="header">
                            <li className="buttonHeader"><NavLink to="/Login">Login</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/Register">Register</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/AboutMe">AboutMe</NavLink></li>
                        </ul>
                        {/* <img src={thailand} alt="thailand" width="100%"/> */}
                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />
                            <Route path="/AboutMe" component={AboutMe} />
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default MainOnePAgeApplication;