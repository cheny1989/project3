import React, { Component } from 'react';
import WebSocketsProvider, { WebSocketContext } from "./WebSocketsProvider";
import Admin from "../vacationAdmin/Admin";
import User from "../vacationUser/User";
import { Redirect } from "react-router";

class VacationWebSocket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    render() {
        const { user } = this.props;
        console.log("user!" + user)
        if (!user) {
            return <Redirect to="/login" />
        }
        return user
            ? <WebSocketContext.Provider value={new WebSocketsProvider()}>
                <Admin />
            </WebSocketContext.Provider>
            : <User />;
    }
}

export default VacationWebSocket;