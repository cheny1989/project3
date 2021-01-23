import React, { Component } from 'react';
import "../loginAndRegister/loginAndRegister.css"
import Login from "../loginAndRegister/Login";
import Register from "../loginAndRegister/Register";
import MainVacation from "../vacationAdmin/MainVacation"
import UserVacationList from "../vacationUser/UserVacationList";
import Logout from "../loginAndRegister/Logout";
import Footer from "../footer/Footer";
// import VacationWebSocket from "./VacationWebSocket"

import { Route, NavLink, HashRouter } from "react-router-dom";
import { Redirect } from "react-router";
class MainOnePageApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount = () => {
        this.fatchALlUser();
    }
  
    async fatchALlUser() {
        const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDVmM2FjZjVkNjQ5MmRkMGM1NjBlNyIsInVzZXJOYW1lIjoiY2hlbjE5ODkiLCJpYXQiOjE2MTE0MTczOTUsImV4cCI6MTYxMTQyMDk5NX0.yYJHFSE1r8zHKrow5vT5FviCtYhfHDHx9o802tf67qo'
        try {
            const response = await fetch('/api/apiuser/test', {
                headers:{
                    Authorization: `Bearer ${tokenNew}`,
                }
            });
            const result = await response.json();
            this.setState({ user: result });
        } catch (err) {
            console.log("ERROR " + err)
        }
    };

    render() {

        const { user } = this.state
        console.log(user)

        return (
            <div>
                <HashRouter>
                    <div>
                        <ul className="header">
                            <li className="buttonHeader"><Redirect to="/Login">Login</Redirect ></li>
                            <li className="buttonHeader"><NavLink to="/Login">Login</NavLink ></li>
                            <li className="buttonHeader"><NavLink to="/Register">Register</NavLink></li>
                            
                            {user && 
                            <li className="buttonHeader"><NavLink to="/MainVacation">Create Vacation</NavLink></li>
                            }

                            {user &&
                            <li className="buttonHeader"><NavLink to="/UserVacationList">User Vacation</NavLink></li>
                            }

                            {user &&
                            <li className="buttonHeader"><NavLink to="/Logout">Log Out</NavLink></li>
                            }
                            {/* <li className="buttonHeader"><NavLink to="/VacationWebSocket"></NavLink></li> */}
                        </ul>
                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />
                            <Route path="/MainVacation" component={MainVacation} />
                            <Route path="/UserVacationList" component={UserVacationList} />
                            <Route path="/Logout" component={Logout} />
                            {/* <Route path="/VacationWebSocket" component={VacationWebSocket} /> */}
                        </div>
                    </div>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

export default MainOnePageApplication;