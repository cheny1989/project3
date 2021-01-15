import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation:[],
            counter: 1
        }
    }
    
    counter = (_id) => {
        const findId = _id;
        const counter = this.state.counter++
        const newCounter = ({findId, counter});
        console.log(newCounter);

        // var rbody = {
        //     newCounter: newCounter,
        // };
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(rbody)
        // };
        // fetch('/api/apivacation/post', requestOptions)
        //     .then(r => r.json())
        //     .then(res => this.setState({ res }))
        };

    render() {

        const { item } = this.props;

        return (
            <div>
                <div key={item._id} className="vacationListStyle">
                    <p className="destination_style">Destination: {item.destination.toUpperCase()}</p>
                    <p className="word_wrap">Description: {item.description}</p>
                    <p>Price: {item.price}$</p>
                    <p>Picture: <br /><img src={item.picture} width="320px" height="180px" alt="img"></img></p>
                    <p>Start Date: {item.startDate.split("-").reverse().join("/")}</p>
                    <p>End Date: {item.endDate.split("-").reverse().join("/")}</p>
                    <button className="follow_btn" onClick={() => this.counter(item._id)}>Follow</button>
                </div>
            </div>
        );
    }
}

export default User;

