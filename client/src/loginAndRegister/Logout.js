import React, { Component } from 'react';
import Login from "../loginAndRegister/Login";
import { Route, NavLink, HashRouter } from "react-router-dom";


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.logout();
    }

    logout = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        };
        fetch('/api/apiuser/logout', requestOptions)
            .then((response) => {
                response.json().then((result) => {
                    console.log("result: ", result);
                });
            })
            .then(res => this.setState({ res }));

            setTimeout(function () {
                window.location.reload(false);
        }, 3000);
    }

    render() {
        return (
            <div>
                <div className="logout">
                <HashRouter>
                    <br />
                    <div className="backToLoginPage"><NavLink to="/Login">Back to Login Page</NavLink></div>
                    <Route path="/Login" component={Login} />
                </ HashRouter>
                
                    <table>
                        <tr className="tr_first">
                            <th className="th_first">Thank You</th>
                        </tr>
                        <tr className="tr_second">
                            <th>The journey begin...</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Logout;