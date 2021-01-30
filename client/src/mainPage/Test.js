import React, { Component } from 'react';
// import { Redirect } from "react-router";


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendRedirect: null,
          }
    }
    render() { 
        const { item } = this.props;
        // if (this.state.sendRedirect) {
		// 	const redirect = <Redirect to={this.state.sendRedirect}/>
		// 	this.setState({sendRedirect: null});
		// 	return redirect;
        // }
        
        return (
            <div>
                {item.userName}
            </div>
          );
    }
}
 
export default Test;