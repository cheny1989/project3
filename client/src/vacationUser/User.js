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
        const { item } = this.props;
        const findId = _id;
        const counter = item.numberFollow;
        console.log(counter)
        const newCounter = item.numberFollow ++
        const sum = ({ findId, newCounter });
        console.log(sum);

        const description = item.destination;
        const destination = item.description;
        const price = item.price;
        const picture = item.picture;
        const startDate = item.startDate;
        const endDate = item.endDate;
        const numberFollow = item.numberFollow
    
        var rbody = {
            description: description,
            destination: destination,
            price: price,
            picture: picture,
            startDate: startDate,
            endDate: endDate,
            numberFollow: numberFollow
          };
          fetch(`/api/apivacation/edit/${_id}`,
        {
          method: "PUT",
          body: JSON.stringify(rbody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(r => r.json())
        .then(res => this.setState({ res }))
    };

    Uncounter=(_id)=>{
        const { item } = this.props;
        const findId = _id;
        const counter = item.numberFollow;
        const newCounter = item.numberFollow --
        const sum = ({ findId, newCounter });
        console.log(sum);
        if(counter <= 0){
            item.numberFollow = 0
        }
        const description = item.destination;
        const destination = item.description;
        const price = item.price;
        const picture = item.picture;
        const startDate = item.startDate;
        const endDate = item.endDate;
        const numberFollow = item.numberFollow
    
        var rbody = {
            description: description,
            destination: destination,
            price: price,
            picture: picture,
            startDate: startDate,
            endDate: endDate,
            numberFollow: numberFollow
          };
          fetch(`/api/apivacation/edit/${_id}`,
        {
          method: "PUT",
          body: JSON.stringify(rbody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(r => r.json())
        .then(res => this.setState({ res }))
    };

    render() {

        const { item } = this.props;

        return (
            <div>
                <div key={item._id} className="vacationListStyle">
                    <p className="destination_style">{item.destination.toUpperCase()}</p>
                    <p>{item.price > 300 ? <></>:<p className="goodPrice">Good Price! &#128525;</p>}</p>
                    <p>{item.numberFollow < 5 ? <></>:<p className="hotDestination">Hot Destination &#128165;</p>}</p>
                    <p className="word_wrap">Description: {item.description}</p>
                    <p>Price: {item.price}$</p>
                    <p><img src={item.picture} width="95%" height="100%" alt="img"></img></p>
                    <p>Start Date: {item.startDate.split("-").reverse().join("/")}</p>
                    <p>End Date: {item.endDate.split("-").reverse().join("/")}</p>
                    <p className="numberOfFollow">Number of Followers: {item.numberFollow} &#x261D;</p>
                    <button className="follow_btn" onClick={() => this.counter(item._id)}>Follow &#128150;</button>
                    <button className="unfollow_btn" onClick={() => this.Uncounter(item._id)}>Unfollow &#128148;</button>
                </div>
            </div>
        );
    }
}

export default User;

