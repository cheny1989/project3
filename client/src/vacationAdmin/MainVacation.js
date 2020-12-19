import React, { Component } from 'react';
import CrateVacation from "./CrateVacation";
import MapVacation from "./MapVacation";

class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation:[
                {id: 1, description:"WOW", price: "100$", picture:"img1", StartDate: "date1", EndDate: "date1"},
                {id: 2, description:"WOW1", price: "100$", picture:"img2",  StartDate: "date2", EndDate: "date2"}
            ]
          }
    }

    crateVacation = (singleVacation)=>{
        singleVacation.id = Math.random();
        let newVacation = [...this.state.vacation, singleVacation];
        this.setState({
            vacation: newVacation
        })
    }

    deleteVacation=(id)=>{
        let vacationDeleteById = this.state.vacation.filter(singleVacation=>{
            return singleVacation.id !== id;
        });
        this.setState({
          vacation: vacationDeleteById  
        })
    }

    render() { 
        return (
            <div>
                <CrateVacation crateVacation={this.crateVacation} />
                <MapVacation deleteVacation={this.deleteVacation} vacation={this.state.vacation} />
            </div>
          );
    }
}
 
export default MainVacation;