import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.logout();
    }

    logout=()=>{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        };
        fetch('/api/apiuser/logout', requestOptions)
            .then(r => r.json())
            .then(res => this.setState({ res }))
    }

    render() {
        return (
            <div>
                <div className="logout">
                    <table>
                        <tr className="tr_first">
                            <th className="th_first">Thank You</th>
                        </tr>
                        <tr className="tr_second">
                            <th>The journey begin...</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Logout;