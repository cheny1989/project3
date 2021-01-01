import React, { Component } from 'react';
import MainOnePageApplication from "../loginAndRegister/MainOnePageApplication";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <MainOnePageApplication />
            </div>
          );
    }
}
 
export default MainPage;