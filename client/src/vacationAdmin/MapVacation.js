import React from 'react';

const MapVacation = ({ vacation, deleteVacation }) => {
    const vacationList = vacation.map(singleVacation => {
        return (
            <div key={singleVacation.id} className="vacationListStyle">
                    <p>Description: {singleVacation.description}</p>
                    <p>Price ($): {singleVacation.price}$</p>
                    <p>Picture (URL):<br /><img src={singleVacation.picture} width="300px" alt="img"></img></p>
                    {/* <p>Picture: {singleVacation.picture}</p> */}
                    <p>Start Date: {singleVacation.StartDate}</p>
                    <p>End Date: {singleVacation.EndDate}</p>
                    <button className="deleteVacationStyle" onClick={() => { deleteVacation(singleVacation.id) }}>DELETE VACATION</button>
                    <button className="editVacationStyle">EDIT</button>
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