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

// import $ from "jquery";


class MainOnePageApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'test',
        };
    }
    
    // clickme = () => {
    //     const userName = document.getElementById("userName").value;
        
    //     if (userName.length > 1) {
    //         this.setState({
    //             user: userName
    //         })
    //     }
    // }

    render() {

        return (
            <div>
                {/* <button onClick={() => this.clickme()}>CLICK</button> */}
                <HashRouter>
                    <div>
                        <ul className="header">
                            <li className="buttonHeader"><Redirect to="/Login">Login</Redirect ></li>
                            <li className="buttonHeader"><NavLink to="/Login">Login</NavLink ></li>
                            <li className="buttonHeader"><NavLink to="/Register">Register</NavLink></li>

                            {this.state.user.length < 1 ?
                                <></> :
                                <li className="buttonHeader"><NavLink to="/MainVacation">Create Vacation</NavLink></li>
                            }

                            {this.state.user.length < 1 ?
                                <></> :
                                <li className="buttonHeader"><NavLink to="/UserVacationList">View all Vacation</NavLink></li>
                            }

                            {this.state.user.length < 1 ?
                                <></> :
                                <li className="buttonHeader"><NavLink to="/Logout">Log Out</NavLink></li>
                            }

                            {this.state.user.length < 1 ?
                                <></> :
                                <li className="buttonHeader"><NavLink to="/MainChat">Main Chat</NavLink></li>
                            }

                        </ul>

                        <div className="content">
                            <Route path="/Login" component={Login} />
                            <Route path="/Register" component={Register} />

                            {this.state.user.length < 1 ?
                                <></> :
                                <Route path="/MainVacation" component={MainVacation} />
                            }

                            {this.state.user.length < 1 ?
                                <></> :
                                <Route path="/UserVacationList" component={UserVacationList} />
                            }

                            {this.state.user.length < 1 ?
                                <></> :
                                <Route path="/Logout" component={Logout} />
                            }

                            {this.state.user.length < 1 ?
                                <></> :
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