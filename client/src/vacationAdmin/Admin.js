import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacation: [],
      id: 0
    }
  }

  deleteVacation = () => {
    alert("DELETE")
    fetch('/api/apivacation/delete',
      { method: 'DELETE' });
    // document.getElementById("clear-cookie").innerHTML = "Now the cookie is clear";
    // window.location.reload(false);
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
          <button className="deleteVacationStyle" onClick={() => { this.deleteVacation(item.id) }}>DELETE</button>
          <button className="editVacationStyle">EDIT</button>
        </div>
      </div>
    );
  }
}

export default Admin;