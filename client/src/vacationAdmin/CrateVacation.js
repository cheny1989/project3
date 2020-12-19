import React, { Component } from 'react';
import $ from "jquery"


class CrateVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null,
            price: null,
            picture: null,
            StartDate: null,
            EndDate: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.crateVacation(this.state);
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const picture = document.getElementById("picture").value;
        const StartDate = document.getElementById("StartDate").value;
        const EndDate = document.getElementById("EndDate").value;

        $('#description').val('')
        $('#price').val('')
        $('#picture').val('')
        $('#StartDate').val('')
        $('#EndDate').val('')

        if(description.length<1 || price.length<1 || picture.length<1 || StartDate.length<1 || EndDate.length<1){
            alert("Error")
        }else{
            alert("ok")
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="fromStyle">
                    <div className="createVacationStyle">
                        <div className="addVacationTitle">ADD VACATION</div>
                        <br />
                        <label htmlFor="description">Description: </label>
                        <br />
                        <input type="text" id="description" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="price">Price: </label>
                        <br />
                        <input type="number" id="price" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="picture">Picture (URL): </label>
                        <br />
                        <input type="link" id="picture" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="StartDate">Start Date: </label>
                        <br />
                        <input type="date" id="StartDate" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="EndDate">End Date: </label>
                        <br />
                        <input type="date" id="EndDate" onChange={this.handleChange} />
                        <br />
                        <button className="btnAddVacationStyle">ADD VACATION</button>
                        {/* {this.state.description}
                    {this.state.price}
                    {this.state.picture}
                    {this.state.StartDate}
                    {this.state.EndDate} */}
                    </div>
                </form>

            </div>
        );
    }
}

export default CrateVacation;