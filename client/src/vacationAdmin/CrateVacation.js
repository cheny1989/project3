import React, { Component } from 'react';

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
        document.getElementById("description").value = '';
        document.getElementById("price").value = '';
        document.getElementById("picture").value = '';
        document.getElementById("StartDate").value = '';
        document.getElementById("EndDate").value = '';
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="fromStyle">
                    <div className="createVacationStyle">
                        <label htmlFor="description">Description: </label>
                        <br />
                        <input type="text" id="description" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="price">Price: </label>
                        <br />
                        <input type="number" id="price" onChange={this.handleChange} />
                        <br />
                        <label htmlFor="picture">Picture: </label>
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