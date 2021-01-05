import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: []
        }
    }
    render() {

        const { item } = this.props;

        return (
            <div>
                <div key={item.id} className="vacationListStyle">
                    <p className="destination_style">Destination: {item.destination.toUpperCase()}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price}$</p>
                    <p>Picture: <br /><img src={item.picture} width="320px" height="180px" alt="img"></img></p>
                    <p>Start Date: {item.startDate.split("-").reverse().join("/")}</p>
                    <p>End Date: {item.endDate.split("-").reverse().join("/")}</p>
                    <button className="follow_btn">Follow</button>
                </div>
            </div>
        );
    }
}

export default User;

