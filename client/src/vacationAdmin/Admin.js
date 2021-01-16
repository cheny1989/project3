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
    const { item } = this.props;

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

    alert("The: " + item.destination + " Deleted")
    window.location.reload();
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };


  handleSubmit = (_id) => {
    const findId = _id;
    console.log(findId);
    
    const { item } = this.props;
    const destination = document.getElementById("destinationNew"+[item._id]).value;
    const description = document.getElementById("descriptionNew"+[item._id]).value;
    const price = document.getElementById("priceNew"+[item._id]).value;
    const picture = document.getElementById("pictureNew"+[item._id]).value;
    const startDate = document.getElementById("startDateNew"+[item._id]).value;
    const endDate = document.getElementById("endDateNew"+[item._id]).value;

    var rbody = {
      description: description,
      destination: destination,
      price: price,
      picture: picture,
      startDate: startDate,
      endDate: endDate
  };

    console.log({ rbody: rbody })

    fetch(`/api/apivacation/edit/${_id}`,
      {
        method: "PUT",
        body: JSON.stringify( rbody ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(r => r.json())
      .then(res => this.setState({ res }));
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
          <button className="deleteVacationStyle" onClick={() => { this.deleteVacation(item._id) }}>DELETE</button>
          <button className="editVacationStyle">OPEN EDIT</button>


          <p>EDIT</p>
          <form onSubmit={() => { this.handleSubmit(item._id) }}>
            <div key={item._id}>
              <input type="text" value={item._id} onChange={this.handleChange} />
              <input type="text" id={"destinationNew"+[item._id]} onChange={this.handleChange} placeholder="Destination..."/>
              <input type="text" id={"descriptionNew"+[item._id]} onChange={this.handleChange} placeholder="Description..."/>
              <input type="number" id={"priceNew"+[item._id]} onChange={this.handleChange} placeholder="Price..."/>
              <input type="text" id={"pictureNew"+[item._id]} onChange={this.handleChange} placeholder="Picture..."/>
              <input type="date" id={"startDateNew"+[item._id]} onChange={this.handleChange} />
              <input type="date" id={"endDateNew"+[item._id]} onChange={this.handleChange} />
              <br />
              <button>SEND EDIT</button>
            </div>
          </form>


        </div>
      </div>
    );
  }
}

export default Admin;