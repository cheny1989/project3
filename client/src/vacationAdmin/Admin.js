import React, { Component } from 'react';
import $ from "jquery";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacation: [],
    }
  }

  componentDidMount = () => {
    const { item } = this.props;
    $(".titleShowAndHide" + [item._id]).css({ "display": "none" });
  }

  refreshPAge=()=>{
    window.location.reload(false);
  }

  deleteVacation = (_id) => {
    const { item } = this.props;

    if (window.confirm("Are you sure to delete vacation: " + item.destination)) {

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

      alert("The " + item.destination + " Deleted")
      window.location.reload();
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };


  handleSubmit = (_id) => {
    const { item } = this.props;

    if (window.confirm("Are you sure to change vacation: " + item.destination)) {

      const findId = _id;
      console.log(findId);

      const destination = document.getElementById("destinationNew" + [item._id]).value;
      const description = document.getElementById("descriptionNew" + [item._id]).value;
      const price = document.getElementById("priceNew" + [item._id]).value;
      const picture = document.getElementById("pictureNew" + [item._id]).value;
      const startDate = document.getElementById("startDateNew" + [item._id]).value;
      const endDate = document.getElementById("endDateNew" + [item._id]).value;
      const numberFollow = document.getElementById("numberFollow" + [item._id]).value;

      var rbody = {
        description: description,
        destination: destination,
        price: price,
        picture: picture,
        startDate: startDate,
        endDate: endDate,
        numberFollow: numberFollow
      };

      var d_start = new Date(startDate);
      var d_end = new Date(endDate);
      var currentDate = Date.now();

      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let errorDate = dd + "/" + mm + "/" + yyyy

      if (d_start < currentDate) {
        alert("Vacation Date Start before: " + errorDate + " is Wrong");
        return
      }

      if (d_start >= d_end) {
        alert("Start Date Must be later End Date. please Change it and send again");
        return
      }

      if(numberFollow < 0 ){
        alert("ERROR - Number of Follow must be 0 minimum")
        return
      }

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
        .then(r =>this.refreshPAge(r))

      alert("The " + item.destination + " Changed to new values");

    } else {
      alert("The edit canceled");
    }
  };



  oldDestination = () => {
    const { item } = this.props;
    $('#destinationNew' + [item._id]).val(item.destination)
  };

  oldDescription = () => {
    const { item } = this.props;
    $('#descriptionNew' + [item._id]).val(item.description)
  };

  oldPrice = () => {
    const { item } = this.props;
    $('#priceNew' + [item._id]).val(item.price)
  };

  oldPicture = () => {
    const { item } = this.props;
    $('#pictureNew' + [item._id]).val(item.picture)
  };

  oldStartDate = () => {
    const { item } = this.props;
    $('#startDateNew' + [item._id]).val(item.startDate)
  };

  oldStEndDate = () => {
    const { item } = this.props;
    $('#endDateNew' + [item._id]).val(item.endDate)
  };

  oldNumberFollow = ()=>{
    const { item } = this.props;
    $('#numberFollow' + [item._id]).val(item.numberFollow)
  }

  notRefreshPageAndPushAll = (e) => {
    e.preventDefault();
    this.oldDestination();
    this.oldDescription();
    this.oldPrice();
    this.oldPicture();
    this.oldStartDate();
    this.oldStEndDate();
    this.oldNumberFollow();
  }

  render() {
    const { item } = this.props;

    function showAndHide(_id) {
      const findId = _id;
      console.log(findId);

      $("#showAndHide" + [item._id]).click(function () {
        $(".titleShowAndHide" + [item._id]).toggle();
      });
    }

    function showAndHide2(_id) {
      const findId = _id;
      console.log(findId);

      $("#showAndHide2" + [item._id]).click(function () {
        $(".titleShowAndHide" + [item._id]).toggle();
      });
    }

    return (
      <div>

        {/* delete vacation by id*/}
        <div key={item._id} className="vacationListStyle">
          <p className="destination_style">{item.destination.toUpperCase()}</p>
          <p>{item.price > 300 ? <></>:<p className="goodPrice">Good Price! &#128525;</p>}</p>
          <p>{item.numberFollow < 5 ? <></>:<p className="hotDestination">Hot Destination &#128165;</p>}</p>
          <p className="word_wrap">Description: {item.description}</p>
          <p className="priceStyle">Price: {item.price}$</p>
          <p><img src={item.picture} width="95%" height="100%" alt="img"></img></p>
          <p>Start Date: {item.startDate.split("-").reverse().join("/")}</p>
          <p>End Date: {item.endDate.split("-").reverse().join("/")}</p>
          <p className="numberOfFollow">Number of Followers: {item.numberFollow} &#x261D;</p>
          <button className="deleteVacationStyle" onClick={() => { this.deleteVacation(item._id) }}>DELETE</button>
          {/* <br /> */}
          <button className="editVacationStyle" id={"showAndHide" + [item._id]} onClick={() => showAndHide(item._id)}>EDIT</button>


          {/* edit vacation by id*/}
          <div className={"titleShowAndHide" + [item._id]}>
            <div className="changeVacationTitle">Edit Vacation</div>
            <div className="pushVacationTitle">Click <span className="currently">&#x2714;</span> to push previous value of vacation</div>
            <hr />
            <form onSubmit={() => { this.handleSubmit(item._id) }}>
              <div key={item._id}>
                <input type="text" className="newInputEdit" value={item._id} onChange={this.handleChange} disabled={true} />
                <br />
                <label>Destination:</label>
                <br />
                <input type="text" className="newInputEdit" id={"destinationNew" + [item._id]} onChange={this.handleChange} required={this} placeholder="Destination..." />
                <button className="currently" onClick={() => this.oldDestination()}>&#x2714;</button>

                <br />
                <label>Description:</label>
                <br />
                <input type="text" className="newInputEdit" id={"descriptionNew" + [item._id]} onChange={this.handleChange} required={this} placeholder="Description..." />
                <button className="currently" onClick={() => this.oldDescription()}>&#x2714;</button>

                <br />
                <label>Price:</label>
                <br />
                <input type="number" className="newInputEdit" id={"priceNew" + [item._id]} onChange={this.handleChange} required={this} placeholder="Price..." />
                <button className="currently" onClick={() => this.oldPrice()}>&#x2714;</button>

                <br />
                <label>Picture (URL):</label>
                <br />
                <input type="text" className="newInputEdit" id={"pictureNew" + [item._id]} onChange={this.handleChange} required={this} placeholder="Picture..." />
                <button className="currently" onClick={() => this.oldPicture()}>&#x2714;</button>

                <br />
                <label>Start Date:</label>
                <br />
                <input type="date" className="newInputEdit" id={"startDateNew" + [item._id]} onChange={this.handleChange} required={this} />
                <button className="currently" onClick={() => this.oldStartDate()}>&#x2714;</button>

                <br />
                <label>End Date:</label>
                <br />
                <input type="date" className="newInputEdit" id={"endDateNew" + [item._id]} onChange={this.handleChange} required={this} />
                <button className="currently" onClick={() => this.oldStEndDate()}>&#x2714;</button>

                <br />
                <label>Number Of Follows:</label>
                <br />
                <input type="number" className="newInputEdit" id={"numberFollow" + [item._id]} onChange={this.handleChange} required={this} />
                <button className="currently" onClick={() => this.oldNumberFollow()}>&#x2714;</button>


                {/* <button className="" onClick={() => this.pushAll()}>Push all input</button> */}
                <button className="changeVacationButton">SEND EDIT</button>
              </div>
            </form>

            <form onSubmit={this.notRefreshPageAndPushAll}>
              <button className="pushAll">&#10132; Push all previous inputs &#x2714;</button>
            </form>
            <button className="showAndHide2" id={"showAndHide2" + [item._id]} onClick={() => showAndHide2(item._id)}>&#10008;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;