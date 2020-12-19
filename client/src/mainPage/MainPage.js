import React, { Component } from 'react';
import MainOnePAgeApplication from "../loginAndRegister/MainOnePAgeApplication";
import MainVacation from "../vacationAdmin/MainVacation"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <MainOnePAgeApplication />
                <MainVacation />
            </div>
          );
    }
}
 
export default MainPage;