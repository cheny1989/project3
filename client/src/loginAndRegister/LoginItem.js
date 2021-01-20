import React, { Component } from 'react';

class LoginItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[]
          }
    }

    componentDidMount = () => {
      this.fatchALlUser();
  }

  async fatchALlUser() {
      try {
          const response = await fetch('/api/apiuser/loginnew');
          const result = await response.json();
          this.setState({ user: result })
      } catch (err) {
          alert(err)
      }
  };

    render() { 
        const { item } = this.props;

        return (
            <div key={item.id}>
              <p>{item.userName}</p>  
              <p>{item.password}</p>  
            </div>
          );
    }
}
 
export default LoginItem;