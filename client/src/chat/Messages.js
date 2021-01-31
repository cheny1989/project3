import React, { Component } from 'react';

class Messages extends Component {
    render() {
        return (
            <div className="messages" ref={this.props.refProp}>
                <div className="chat-title">My chat - socket.io</div>
                {this.props.messages.map((message, indexMessage) =>
                    <div className={`message ${(this.props.username === message.user ? 'message-me' : '')}`} key={indexMessage}>
                        <div className="message-user">{message.user}</div>
                        <div className="message-content">{message.content}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default Messages;