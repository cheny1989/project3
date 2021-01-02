import React, { Component } from 'react';
import "./loginAndRegister.css"
import Login from "./Login";
import Register from "./Register";
import MainVacation from "../vacationAdmin/MainVacation"
import AboutMe from "../aboutMe/AboutMe"
import Logout from "./Logout"

import { Route, NavLink, HashRouter } from "react-router-dom";
import Footer from "../footer/Footer"
 


class MainOnePageApplication extends Component {
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
                            <li className="buttonHeader"><NavLink to="/MainVacation">Create Vacation</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/AboutMe">About Me</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/Logout">Log Out</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />
                            <Route path="/MainVacation" component={MainVacation} />
                            <Route path="/AboutMe" component={AboutMe} />
                            <Route path="/Logout" component={Logout} />
                        </div>
                    </div>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

export default MainOnePageApplication;