import React, { Component } from 'react';
import CreateVacation from "./CreateVacation";
import AdminVacationList from "./AdminVacationList"
import "./VacationAdmin.css";

class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
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

    render() {

        return (
            <div>
                <div>
                    <CreateVacation createVacation={this.createVacation} />
                </div>
                <hr />
                <AdminVacationList />
            </div>
        );
    }
}

export default MainVacation;