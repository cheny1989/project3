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

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.crateVacation(this.state);
        document.getElementById("description").value='';
        document.getElementById("price").value='';
        document.getElementById("picture").value='';
        document.getElementById("StartDate").value='';
        document.getElementById("EndDate").value='';
    }


    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="fromStyle">
                    <label htmlFor="description">description: </label>
                    <input type="text" id="description" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="picture">Picture: </label>
                    <input type="text" id="picture" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="StartDate">Start Date: </label>
                    <input type="date" id="StartDate" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="EndDate">End Date: </label>
                    <input type="date" id="EndDate" onChange={this.handleChange} />
                    <br />
                    <button>ADD VACATION</button>
                    {this.state.description}
                    {this.state.price}
                    {this.state.picture}
                    {this.state.StartDate}
                    {this.state.EndDate}
                </form>
                
            </div>
          );
    }
}
 
export default CrateVacation;