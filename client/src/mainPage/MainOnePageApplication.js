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


class MainOnePageApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            token: '',
            sendRedirect: null,
        }
    }

    componentDidMount = () => {
        this.fatchALlUser();
    }

    async fatchALlUser() {

        const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDVmM2FjZjVkNjQ5MmRkMGM1NjBlNyIsInVzZXJOYW1lIjoiY2hlbjE5ODkiLCJpYXQiOjE2MTIwNzMzMjAsImV4cCI6MTYxMjA3NjkyMH0.ppBxPD2RNGrRfMzQlwV1DjXumLnnI5XtNJta6C41UqE'
        // const tokenNew = this.state.token;
        try {
            const response = await fetch('/api/apiuser/token', {
                headers: {
                    Authorization: `Bearer ${tokenNew}`,
                }
            });
            const result = await response.json();
            this.setState({ user: result });
            console.log({ user: result });
            console.log({ user: result.token });
            const token = result.token
            console.log(token);

            this.setState({ user: result.token })

        } catch (err) {
            console.log("ERROR " + err)
        }
    };


    render() {


        // const response = ""
        const response = this.state.user;
        console.log("response: " + response)


        // if (response) {
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