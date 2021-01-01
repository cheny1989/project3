import React, { Component } from 'react';
import CrateVacation from "./CrateVacation";
import MapVacation from "./MapVacation";
import "./VacationAdmin.css";


class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [
                { id: 1, destination: "New-Delhi",  description: "WOW1", price: "100", picture: "https://media.istockphoto.com/photos/humayun-tomb-new-delhi-india-picture-id505239248?k=6&m=505239248&s=612x612&w=0&h=zWaM2foZitMueZtM1XOgxb5PoOxc6QkTNHdoHvArlVo=", StartDate: "05/02/2020", EndDate: "08/02/2020" },
                { id: 2, destination: "Jerusalem", description: "WOW2", price: "200", picture: "https://www.touristisrael.com/wp-content/uploads/210910570-4.jpg", StartDate: "13/08/2020", EndDate: "27/08/2020" },
                { id: 3, destination: "Thailand", description: "WOW3", price: "300", picture: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", StartDate: "05/11/2021", EndDate: "07/11/2021" }
            ],
            id: 4
        }
    }

    crateVacation = (singleVacation) => {
        const rendomNum = singleVacation.id = this.state.id++;
        console.log(rendomNum);
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

    editVacation=(id)=>{
        alert(id)
    }

    render() {
        return (
            <div>
                <div className="imageBackground">
                <CrateVacation crateVacation={this.crateVacation} />
                </div>
                <hr />
                <MapVacation deleteVacation={this.deleteVacation} vacation={this.state.vacation}
                editVacation={this.editVacation} vacation={this.state.vacation}
                />
            </div>
        );
    }
}

export default MainVacation;