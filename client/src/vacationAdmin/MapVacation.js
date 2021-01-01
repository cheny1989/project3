import React, { forwardRef } from 'react';

const MapVacation = ({ vacation, deleteVacation, editVacation }) => {
    const vacationList = vacation.map(singleVacation => {  
    return (
            <div key={singleVacation.id} className="vacationListStyle">
                    <p>Destination: {singleVacation.destination}</p>
                    <p>Description: {singleVacation.description}</p>
                    <p>Price ($): {singleVacation.price}$</p>
                    <p>Picture (URL):<br /><img src={singleVacation.picture} width="350px" height="180px" alt="img"></img></p>
                    {/* <p>Picture: {singleVacation.picture}</p> */}
                    <p>Start Date: {singleVacation.StartDate}</p>
                    <p>End Date: {singleVacation.EndDate}</p>
                    <button className="deleteVacationStyle" onClick={() => { deleteVacation(singleVacation.id)}}>DELETE</button>
                    <button className="editVacationStyle" onClick={()=> { editVacation(singleVacation.id)}} >EDIT</button>
            </div>
        )
    });
    
    return (
        <div className="gridVacationListStyle">
            {vacationList}
        </div>
    )
}

export default MapVacation;