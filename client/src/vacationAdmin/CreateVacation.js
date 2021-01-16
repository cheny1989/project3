import React, { Component } from 'react';
import $ from "jquery";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class CreateVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: null,
            description: null,
            price: null,
            picture: null,
            startDate: null,
            endDate: null,
            errors: {
                destination: '',
                description: '',
                price: '',
                picture: '',
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'destination':
                errors.destination =
                    value.length < 3
                        ? 'Destination must be 3 characters long!'
                        : '';
                break;
            case 'description':
                errors.description =
                    value.length < 5 || value.length > 100
                        ? 'Description must be 5-100 characters long!'
                        : '';
                break;
            case 'price':
                errors.price =
                    value.length < 2
                        ? 'Price must be 2 characters long!'
                        : '';
                break;
            case 'picture':
                errors.picture =
                    value.length < 4
                        ? 'Picture must be 4 characters long!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
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
        // this.props.createVacation(this.state);
        const description = document.getElementById("description").value;
        const destination = document.getElementById("destination").value;
        const price = document.getElementById("price").value;
        const picture = document.getElementById("picture").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

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
            startDate: startDate,
            endDate: endDate
        };

        if (validateForm(this.state.errors)) {
            this.props.createVacation(this.state);

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rbody)
            };
            fetch('/api/apivacation/post', requestOptions)
                .then(r => r.json())
                .then(res => this.setState({ res }))
            alert("The vacation Sent")

                document.getElementById("showAndHideMessage").innerHTML = "YOUR VACATION CREATED &#10004;";
            setTimeout(function () {
               document.getElementById("showAndHideMessage").innerHTML = "";
            }, 3000);

            setTimeout(function () {
                window.location.reload(false);
            }, 1000);

        } else {
            alert("ERROR - invalid Form. please try again")
                document.getElementById("showAndHideMessage").innerHTML = "ERROR - invalid Form. please try again &#10008";
            setTimeout(function () {
               document.getElementById("showAndHideMessage").innerHTML = "";
            }, 3000);
        }
    }

    render() {

        function showAndHide() {
            $(".showAndHide").click(function () {
                $(".createVacationStyle").toggle();
            });
        }
        
        const { errors } = this.state;

        return (
            <div>
                <br />
                <div className="helloAdmin">Hello Admin - only you see a current page</div>
                <button className="showAndHide" onClick={() => showAndHide()}>Show/Hide window to create vacation</button>
                <form onSubmit={this.handleSubmit} className="formStyle">
                    <div>
                        <div className="createVacationStyle">

                            <div className="addVacationTitle">ADD VACATION</div>
                            <br />
                            <label htmlFor="destination">Destination: </label>
                            <br />
                            <input type="text" id="destination" name="destination" onChange={this.handleChange} required={this} noValidate />
                            {errors.destination.length > 0 &&
                                <span className="errorsOfValidation"><br />{errors.destination}</span>
                            }
                            <br />
                            <label htmlFor="description">Description: </label>
                            <br />
                            <textarea id="description" name="description" rows="5" cols="33" onChange={this.handleChange} required={this} noValidate />
                            {errors.description.length > 0 &&
                                <span className="errorsOfValidation"><br />{errors.description}</span>
                            }
                            <br />
                            <label htmlFor="price">Price: </label>
                            <br />
                            <input type="number" id="price" name="price" onChange={this.handleChange} required={this} noValidate />
                            {errors.price.length > 0 &&
                                <span className="errorsOfValidation"><br />{errors.price}</span>
                            }
                            <br />
                            <label htmlFor="picture">Picture (URL): </label>
                            <br />
                            <input type="link" id="picture" name="picture" onChange={this.handleChange} required={this} noValidate />
                            {errors.picture.length > 0 &&
                                <span className="errorsOfValidation"><br />{errors.picture}</span>
                            }
                            <br />
                            <label htmlFor="startDate">Start Date: </label>
                            <br />
                            <input type="date" id="startDate" name="startDate" onChange={this.handleChange} required={this} noValidate />
                            <br />
                            <label htmlFor="endDate">End Date: </label>
                            <br />
                            <input type="date" id="endDate" name="endDate" onChange={this.handleChange} required={this} noValidate />
                            <br />
                            <button className="btnAddVacationStyle">ADD VACATION</button>
                            <div id="showAndHideMessage"></div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateVacation;