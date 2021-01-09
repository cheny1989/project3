// import React, { forwardRef } from 'react';

// const MapVacation = ({ vacation, deleteVacation, editVacation }) => {

//     const vacationList = vacation.length ? (
//      vacation.map(singleVacation => {  
//     return (
//             <div key={singleVacation.id} className="vacationListStyle">
//                     <p className="destination_style">Destination: {singleVacation.destination.toUpperCase()}</p>
//                     <p>Description: {singleVacation.description}</p>
//                     <p>Price ($): {singleVacation.price}$</p>
//                     <p>Picture:<br /><img src={singleVacation.picture} width="320px" height="180px" alt="img"></img></p>
//                     {/* <p>Picture: {singleVacation.picture}</p> */}
//                     <p>Start Date: {singleVacation.startDate}</p>
//                     <p>End Date: {singleVacation.endDate}</p>
//                     <button className="deleteVacationStyle" onClick={() => { deleteVacation(singleVacation.id)}}>DELETE</button>
//                     <button className="editVacationStyle" onClick={()=> { editVacation(singleVacation.id)}} >EDIT</button>
//             </div>
//         )
//     })
//     ) : (<div className="emptyVacation">It's time to create a vacation</div>)

//     return (
//         <div className="gridVacationListStyle">
//             {vacationList}
//         </div>
//     )
// }

// export default MapVacation;