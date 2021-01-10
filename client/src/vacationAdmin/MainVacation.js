import React, { Component } from 'react';
import CreateVacation from "./CreateVacation";
// import MapVacation from "./MapVacation";
import AdminVacationList from "./AdminVacationList"
import "./VacationAdmin.css";


class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [
            ],
            id: 1
        }
    }

    createVacation = (singleVacation) => {
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
                <div>
                <CreateVacation createVacation={this.createVacation} />
                </div>
                <hr />
                {/* <MapVacation deleteVacation={this.deleteVacation} vacation={this.state.vacation}
                editVacation={this.editVacation} vacation={this.state.vacation}
                /> */}
                <AdminVacationList />
            </div>
        );
    }
}

export default MainVacation;