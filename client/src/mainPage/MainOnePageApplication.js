import React, { Component } from 'react';
import "../loginAndRegister/loginAndRegister.css"
import Login from "../loginAndRegister/Login";
import Register from "../loginAndRegister/Register";
import MainVacation from "../vacationAdmin/MainVacation"
import UserVacationList from "../vacationUser/UserVacationList";
import Logout from "../loginAndRegister/Logout";
import Footer from "../footer/Footer";
import MainChat from "../chat/MainChat";

import { Route, NavLink, HashRouter } from "react-router-dom";
import { Redirect } from "react-router";
// import { response } from 'express';


class MainOnePageApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            // token: '',
            sendRedirect: null,
            login: false,
            store: null
        }
    }

    componentDidMount = () => {
        // this.fatchALlUsers();
        // this.login();
    }

    // async fatchALlUsers() {
    //     const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDVmM2FjZjVkNjQ5MmRkMGM1NjBlNyIsInVzZXJOYW1lIjoiY2hlbjE5ODkiLCJpYXQiOjE2MTIwOTkwNDMsImV4cCI6MTYxMjEwMjY0M30.8RjWf8F2WzF79KqE3KwsdM-g8CVBazqjHwl29V-gIfg'
    //     // const tokenNew = this.state.token;
    //     try {
    //         const response = await fetch('/api/apiuser/token', {
    //             headers: {
    //                 Authorization: `Bearer ${tokenNew}`,
    //             }
    //         });
    //         const result = await response.json();
    //         this.setState({ user: result });
    //         console.log({ user: result });
    //         console.log({ user: result.token });
    //         const token = result.token
    //         console.log(token);
    //         this.setState({ user: result.token })

    //     } catch (err) {
    //         console.log("ERROR " + err)
    //     }
    // };

        // login(){
        //     fetch("/api/apiuser/login",{
        //         method: "POST",
        //         body:JSON.stringify(this.state)
        //     }).then((response)=>{
        //         response.json().then((result)=>{
        //             console.warn("result", result);
        //             localStorage.setItem("login", JSON.stringify({
        //                 login: true,
        //                 token:result.token
        //             }))
        //             this.setState({login: true})
        //         })
        //     })
        // }

    render() {


        // const response = "";
        const response = this.state.user;
        console.log("response: " + response)

        // if (response=== null) {
        //     const redirect = <Redirect to={this.state.sendRedirect} />
        //     this.setState({ sendRedirect: null });
        //     return redirect;
        // }

        return (
            <div>
                <HashRouter>
                    <div>
                        <ul className="header">
                            <li className="buttonHeader"><Redirect to="/Login">Login</Redirect ></li>
                            <li className="buttonHeader"><NavLink to="/Login">Login</NavLink ></li>
                            <li className="buttonHeader"><NavLink to="/Register">Register</NavLink></li>

                            {response &&
                                <li className="buttonHeader"><NavLink to="/MainVacation">Create Vacation</NavLink></li>
                            }

                            {response &&
                                <li className="buttonHeader"><NavLink to="/UserVacationList">User Vacation</NavLink></li>
                            }

                            {response &&
                                <li className="buttonHeader"><NavLink to="/Logout">Log Out</NavLink></li>
                            }

                            {response &&
                                <li className="buttonHeader"><NavLink to="/MainChat">Main Chat</NavLink></li>
                            }
                        </ul>

                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />

                            {response &&
                                <Route path="/MainVacation" component={MainVacation} />
                            }

                            {response &&
                                <Route path="/UserVacationList" component={UserVacationList} />
                            }

                            {response &&
                                <Route path="/Logout" component={Logout} />
                            }

                            {response &&
                                <Route path="/MainChat" component={MainChat} />
                            }
                        </div>
                    </div>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

export default MainOnePageApplication;