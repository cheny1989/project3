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

    const description = document.getElementById("descriptionNew").value;
    const destination = document.getElementById("destinationNew").value;
    const price = document.getElementById("priceNew").value;
    const picture = document.getElementById("pictureNew").value;
    const startDate = document.getElementById("startDateNew").value;
    const endDate = document.getElementById("endDateNew").value;

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


    /////////////////////////// *****************

    // const requestOptions = {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ _id: rbody }),
    // };
    // fetch(`/api/apivacation/edit/${_id}`, requestOptions)
    //   .then(function (result) {
    //     this.setState({
    //       vacation: result
    //     });
    //   }.bind(this))

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
          {/* <button className="editVacationStyle" onClick={() => { this.editVacation(item._id) }}>EDIT</button> */}
          <button className="editVacationStyle">OPEN EDIT</button>


          <p>EDIT</p>
          <form onSubmit={() => { this.handleSubmit(item._id) }}>
            <div key={item._id}>
              <input type="text" value={item._id} onChange={this.handleChange} />
              <input type="text" id="destinationNew" onChange={this.handleChange} />
              <input type="text" id="descriptionNew" onChange={this.handleChange} />
              <input type="number" id="priceNew" onChange={this.handleChange} />
              <input type="text" id="pictureNew" onChange={this.handleChange} />
              <input type="date" id="startDateNew" onChange={this.handleChange} />
              <input type="date" id="endDateNew" onChange={this.handleChange} />
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