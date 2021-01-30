import React, { Component } from 'react';
import { io } from 'socket.io-client';
import Messages from "./Messages";
import CreateMessages from "./CreateMessages";

class MainChat extends Component {
    constructor(props) {
        super(props);
        this.socket = null
        this.state = {
            username: '',
            messages: [],
        }
    }

    componentDidMount() {
        this.socket = io();
        this.socket.on('SET_USERNAME', (username) => {
            this.setState({
                username
            })
        });

        this.socket.on('CREATE_MESSAGE', (messageObject) => {
            this.setState({
                messages: [...this.state.messages, messageObject]
            });
            // this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
        })

        this.myRef = React.createRef();

    }

    render() {
        return (
            <div className="rootChat">
                <div className="chat">
                    <Messages refProp={this.myRef} messages={this.state.messages} username={this.state.username} />
                    <CreateMessages handlerCreateMessage={this.handlerCreateMessage} />
                </div>
            </div>
        );
    }

    handlerCreateMessage = (message) => {
        message.user = this.state.username;
        this.socket.emit("SEND_MESSAGE", message
        )
    }
}

export default MainChat;