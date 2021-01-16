import React, { Component } from 'react';
// import MainOnePageApplication from "../loginAndRegister/MainOnePageApplication";
import MainOnePageApplication from "./MainOnePageApplication";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[]
          }
    }

    // componentDidMount=()=>{
    //     this.fatchALlUser();
    // }

    // async fatchALlUser() {
    //     try {
    //         const response = await fetch('/api/apiuser/test');
    //         const result = await response.json();
    //         console.log(result)

    //         const data = JSON.parse(result)

    //         this.setState({ user: data })
    //         alert("OK")
    //     } catch (err) {
    //         alert(err);
    //         alert("ERROR")
    //     }
    // };
    

    render() { 
        return (
            <div>
                <MainOnePageApplication />
            </div>
          );
    }
}
 
export default MainPage;