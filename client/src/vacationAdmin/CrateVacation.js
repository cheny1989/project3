import React, { Component } from 'react';
import $ from "jquery";

class CrateVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null,
            destination: null,
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

    clearInput = () => {
        $('#description').val('')
        $('#destination').val('')
        $('#price').val('')
        $('#picture').val('')
        $('#startDate').val('')
        $('#endDate').val('')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.crateVacation(this.state);
        const description = document.getElementById("description").value;
        const destination = document.getElementById("destination").value;
        const price = document.getElementById("price").value;
        const picture = document.getElementById("picture").value;
        const StartDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        this.setState({
            description: '',
            destination: '',
            price: '',
            picture: '',
            startDate: '',
            endDate: ''
        })

        this.clearInput();

        var rbody = {
            description: description,
            destination: destination,
            price: price,
            picture: picture,
            startDate: StartDate,
            endDate: endDate
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rbody)
        };
        fetch('/api/api/apivacation', requestOptions)
            .then(r => r.json())
            .then(res => this.setState({ res }))
    }

    render() {

        function showAndHide() {
            $(".showAndHide").click(function () {
                $(".createVacationStyle").toggle();
            });
        }
        

        return (
            <div>
                <button className="showAndHide" onClick={() => showAndHide()}>Show/Hide</button>
                <form onSubmit={this.handleSubmit} className="fromStyle">
                    <div className="createVacationStyle">
                        <div className="addVacationTitle">ADD VACATION</div>
                        <br />
                        <label htmlFor="destination">Destination: </label>
                        <br />
                        <input type="text" id="destination" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="description">Description: </label>
                        <br />
                        {/* <input type="text" id="description" onChange={this.handleChange} required={true} /> */}
                        <textarea id="description" name="description" rows="5" cols="33" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="price">Price: </label>
                        <br />
                        <input type="number" id="price" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="picture">Picture (URL): </label>
                        <br />
                        <input type="link" id="picture" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="startDate">Start Date: </label>
                        <br />
                        <input type="date" id="startDate" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="endDate">End Date: </label>
                        <br />
                        <input type="date" id="endDate" onChange={this.handleChange} />
                        <br />
                        <button className="btnAddVacationStyle">ADD VACATION</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrateVacation;