import React, { Component } from 'react';
// import $ from "jquery";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacation: [],
      // id: 0
    }
  }

  deleteVacation = (_id) => {
    const findId = _id;
    console.log(findId)

    fetch(`/api/apivacation/delete/${_id}`,
    {
      method: "DELETE",
      body: JSON.stringify({ _id: _id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (result) {
      this.setState({
          vacation: result
      });
      }.bind(this))
      window.location.reload();
}

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
          <button className="deleteVacationStyle" onClick={() => { this.deleteVacation(item._id)}}>DELETE</button>
          <button className="editVacationStyle">EDIT</button>
        </div>
      </div>
    );
  }
}

export default Admin;