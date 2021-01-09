import React, { Component } from 'react';
import "../loginAndRegister/loginAndRegister.css"
import Login from "../loginAndRegister/Login";
import Register from "../loginAndRegister/Register";
import MainVacation from "../vacationAdmin/MainVacation"
// import AboutMe from "../aboutMe/AboutMe"
import UserVacationList from "../vacationUser/UserVacationList";
import Logout from "../loginAndRegister/Logout";
import Footer from "../footer/Footer";

import { Route, NavLink, HashRouter } from "react-router-dom";
import { Redirect } from "react-router";
class MainOnePageApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul className="header">
                            <li className="buttonHeader"><Redirect  to="/Login">Login</Redirect ></li>
                            <li className="buttonHeader"><NavLink  to="/Login">Login</NavLink ></li>
                            <li className="buttonHeader"><NavLink to="/Register">Register</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/MainVacation">Create Vacation</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/UserVacationList">User Vacation</NavLink></li>
                            <li className="buttonHeader"><NavLink to="/Logout">Log Out</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />
                            <Route path="/MainVacation" component={MainVacation} />
                            <Route path="/UserVacationList" component={UserVacationList} />
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