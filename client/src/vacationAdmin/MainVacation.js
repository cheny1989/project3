import React, { Component } from 'react';
import CreateVacation from "./CreateVacation";
import MapVacation from "./MapVacation";
import "./VacationAdmin.css";


class MainVacation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [
                { id: 1, destination: "New-Delhi",  description: "WOW1", price: "100", picture: "https://media.istockphoto.com/photos/humayun-tomb-new-delhi-india-picture-id505239248?k=6&m=505239248&s=612x612&w=0&h=zWaM2foZitMueZtM1XOgxb5PoOxc6QkTNHdoHvArlVo=", startDate: "05/02/2020", endDate: "08/02/2020" },
                { id: 2, destination: "Jerusalem", description: "WOW2", price: "200", picture: "https://www.touristisrael.com/wp-content/uploads/210910570-4.jpg", startDate: "13/08/2020", endDate: "27/08/2020" },
                { id: 3, destination: "Bangkok", description: "WOW3", price: "300", picture: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", startDate: "05/11/2021", endDate: "07/11/2021" },
                { id: 4, destination: "Tokio", description: "WOW4", price: "600", picture: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/gettyimages-829204664.jpg", startDate: "04/01/2021", endDate: "04/02/2021" },
                { id: 5, destination: "Barcelona", description: "WOW5", price: "300", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaX-OiawWVTc3fciti_pYvBPdQRUK4pHPFgg&usqp=CAU", startDate: "05/11/2021", endDate: "07/11/2021" },
                { id: 6, destination: "kathmandu", description: "WOW6", price: "300", picture: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/4a/kathmandu.jpg?w=1100&h=600&s=1", startDate: "01/11/2021", endDate: "07/11/2021" },

            ],
            id: 7
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
                <div className="imageBackground">
                <CreateVacation createVacation={this.createVacation} />
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