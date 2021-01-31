import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount = () => {
        this.fatchALlUser();
    }

    async fatchALlUser() {
        try {
            const response = await fetch('/api/apiuser/register');
            const result = await response.json();
            this.setState({ user: result })
        } catch (err) {
            alert(err)
        }
    };

    render() {

        const numberOfVacations = Object.keys(this.state.user).length;

        return (
            <div>
                <div className="numberOfVacations">Number of Users that Signed up: <span className="numberOfVacations_span">{numberOfVacations}</span></div>
            </div>
        );
    }
}

export default User;