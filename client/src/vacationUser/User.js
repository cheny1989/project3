import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [],
            counter: 0
        }
    }

    counter = (_id) => {
        const findId = _id;
        const counter = this.state.counter ++
        const newCounter = ({ findId, counter });
        console.log(newCounter);
    };

    Uncounter=(_id)=>{
        const findId = _id;
        const counter = this.state.counter --
        const newCounter = ({ findId, counter });
        console.log(newCounter);
        if(counter <= 0){
            this.setState({
                counter: 0
            })
        }
    }

    render() {

        const { item } = this.props;

        return (
            <div>
                <div key={item._id} className="vacationListStyle">
                    <p className="destination_style">Destination: {item.destination.toUpperCase()}</p>
                    <p>{item.price > 300 ? <></>:<p className="goodPrice">Good Price! &#128525;</p>}</p>
                    <p className="word_wrap">Description: {item.description}</p>
                    <p>Price: {item.price}$</p>
                    <p>Picture: <br /><img src={item.picture} width="95%" height="100%" alt="img"></img></p>
                    <p>Start Date: {item.startDate.split("-").reverse().join("/")}</p>
                    <p>End Date: {item.endDate.split("-").reverse().join("/")}</p>
                    <p>Number of Followers: {item.numberFollow} &#x261D;</p>
                    <button className="follow_btn" onClick={() => this.counter(item._id)}>Follow &#128150;</button>
                    <button className="unfollow_btn" onClick={() => this.Uncounter(item._id)}>Unfollow &#128148;</button>
                </div>
            </div>
        );
    }
}

export default User;

