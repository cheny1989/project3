import React, { Component } from 'react';
import CreateVacation from "./CreateVacation";
// import MapVacation from "./MapVacation";
import AdminVacationList from "./AdminVacationList"
import "./VacationAdmin.css";
// import {Redirect} from "react-router";



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
        // const {user} = this.props;
        // if (!user) {
        // 	return <Redirect to="/login"/>
        // }

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