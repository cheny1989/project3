import React, { Component } from 'react';
import CrateVacation from "./CrateVacation";
import MapVacation from "./MapVacation";
import "./VacationAdmin.css";

class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [
                { id: 1, description: "WOW1", price: "100", picture: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", StartDate: "date1", EndDate: "date1" },
                { id: 2, description: "WOW2", price: "200", picture: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", StartDate: "date2", EndDate: "date2" },
                { id: 3, description: "WOW3", price: "300", picture: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", StartDate: "date3", EndDate: "date3" }
            ]
        }
    }

    crateVacation = (singleVacation) => {
        const test = singleVacation.id = Math.random();
        console.log(test);
        let newVacation = [...this.state.vacation, singleVacation];
        this.setState({
            vacation: newVacation
        })
    }

    deleteVacation = (id) => {
        let vacationDeleteById = this.state.vacation.filter(singleVacation => {
            return singleVacation.id !== id
        });
        this.setState({
            vacation: vacationDeleteById
        })
    }

    render() {
        return (
            <div>
                <div className="flexBackgroundImageAndBox">
                    <div className="backgroundImage">
                        <CrateVacation crateVacation={this.crateVacation} />
                    </div>
                </div>
                <hr />
                <MapVacation deleteVacation={this.deleteVacation} vacation={this.state.vacation} />
            </div>
        );
    }
}

export default MainVacation;