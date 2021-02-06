import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const {item} = this.props
        console.log("item: " + item)
        
        return (
            <div>

            </div>
          );
    }
}
 
export default Test;