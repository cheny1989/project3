import React, { Component } from 'react';

class LoginItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[]
          }
    }

    render() { 
        const { item } = this.props;
        console.log(item)

        return (
            <div key={item.id}>
              <p>{item.userName}</p>  
              <p>{item.password}</p>  
            </div>
          );
    }
}
 
export default LoginItem;