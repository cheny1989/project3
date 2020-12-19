import React, { Component } from 'react';
import MainOnePAgeApplication from "../loginAndRegister/MainOnePAgeApplication";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <MainOnePAgeApplication />
            </div>
          );
    }
}
 
export default MainPage;