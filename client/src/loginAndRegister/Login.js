import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Register from "./Register";
import $ from "jquery";
import LoginItem from "./LoginItem";
// import { token } from 'morgan';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            user: []
        }
    }

    // https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#get-an-access-token
    
    componentDidMount = () => {
        this.fatchALlUser();
    }
  
    async fatchALlUser() {
        const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDVmM2FjZjVkNjQ5MmRkMGM1NjBlNyIsInVzZXJOYW1lIjoiY2hlbjE5ODkiLCJpYXQiOjE2MTE0MTczOTUsImV4cCI6MTYxMTQyMDk5NX0.yYJHFSE1r8zHKrow5vT5FviCtYhfHDHx9o802tf67qo'
        try {
            const response = await fetch('/api/apiuser/test', {
                headers:{
                    Authorization: `Bearer ${tokenNew}`,
                }
            });
            const result = await response.json();
            this.setState({ user: result });
        } catch (err) {
            console.log("ERROR " + err)
        }
    };

    // async fatchALlUser() {
    //     const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDVmM2FjZjVkNjQ5MmRkMGM1NjBlNyIsInVzZXJOYW1lIjoiY2hlbjE5ODkiLCJpYXQiOjE2MTE0MTczOTUsImV4cCI6MTYxMTQyMDk5NX0.yYJHFSE1r8zHKrow5vT5FviCtYhfHDHx9o802tf67qo'
    //     const response = await fetch('/api/apiuser/test', {
    //         headers:{
    //             Authorization: `Bearer ${tokenNew}`,
    //         }
    //     })
    //     console.log(response)
    // };
    


    clearInput = () => {
        $('#userName').val('')
        $('#password').val('')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;

        // this.setState({
        //     userName: '',
        //     password: ''
        // });

        this.clearInput();

        var rbody = {
            userName: userName,
            password: password,
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rbody)
        };
        fetch('/api/apiuser/login', requestOptions)
            .then(res => res.json())
            .then(res => this.setState({ res }))
    };

    render() {

        // const filterComment = this.state.user;
        const { user } = this.state
        console.log(user)

        return (
            <form onSubmit={this.handleSubmit} className="input_style">
                <div className="widowRegisterAndLogin">
                    <div className="enjoyTitle">Login and Enjoy</div>

                    <label htmlFor="userName">User Name: </label>
                    <br />
                    <input type="text" id="userName" name="userName" onChange={this.handleChange} required={true} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <br />
                    <input type="password" id="password" name="password" onChange={this.handleChange} required={true} />
                    <br />
                    <button className="button_style" type="submit">Login</button>

                    <HashRouter>
                        <br />
                        <div className="notRegister"><NavLink to="/Register">Not Register? Click Here</NavLink></div>
                        <Route path="/Register" component={Register} />
                    </ HashRouter>
                </div>

                <div>
                    {/* {filterComment
                        .map(s =>
                            <LoginItem key={s.id} item={s} />
                        )
                    } */}
                </div>
            </form>
        )
    }
}

export default Login;