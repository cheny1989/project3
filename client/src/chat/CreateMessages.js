import React, { Component } from 'react';

class CreateMessages extends Component {
    constructor() {
        super();
        this.state = {
            messageContant: '',
          }
    }
    render() { 
        return (
            <form className="create-message" onSubmit={this.handleSubmit}>
                <input className="css-input" type="text" value={this.state.messageContant} onChange={this.handlerChangeMessaerConternt} placeholder="Enter Message..."/>
                <input className="css-submit" type ="submit" value="SEND" />
            </form>
          );
    }

    handlerChangeMessaerConternt =(e)=>{
        this.setState({
            messageContant: e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        
        const message = {
            content: this.state.messageContant
        }

        this.setState({
            messageContant: ''
        })

        this.props.handlerCreateMessage(message);
    }
}
 
export default CreateMessages;