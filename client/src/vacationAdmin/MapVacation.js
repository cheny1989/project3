import React from 'react';

const MapVacation = ({vacation, deleteVacation})=>{

    const vacationList = vacation.map(singleVacation=>{
    return(
        <div key={singleVacation.id}>
            <p>description: {singleVacation.description}</p>
            <p>price: {singleVacation.price}</p>
            <p>picture: {singleVacation.picture}</p>
            <p>Start Date: {singleVacation.StartDate}</p>
            <p>End Date: {singleVacation.EndDate}</p>
            <button onClick={()=>deleteVacation(singleVacation.id)}>DELETE VACATION</button>
        </div>
    )
    });

    return(
        <div>
            {vacationList}
        </div>
    )
}

export default MapVacation;