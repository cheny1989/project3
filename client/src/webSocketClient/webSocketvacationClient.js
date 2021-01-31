// import React, { Component } from 'react';
// import { io } from 'socket.io-client';
// import Messages from "./Messages";
// import CreateMessages from "./CreateMessages";

// class webSocketvacationClient extends Component {
//     constructor(props) {
//         super(props);
//         this.socket = null
//         this.state = {
//             userVacation: '',
//             vacations: [],
//         }
//     }

//     componentDidMount() {
//         this.socket = io();
//         this.socket.on('SET_VACATIION', (userVacation) => {
//             this.setState({
//                 userVacation
//             })
//         });

//         this.socket.on('CREATE_VACATIION', (vacationObject) => {
//             this.setState({
//                 vacations: [...this.state.vacations, vacationObject]
//             });
//         })

//         this.myRef = React.createRef();

//     }

//     render() {
//         return (
//             <div className="rootChat">
//                 <div className="chat">
//                     <Messages refProp={this.myRef} vacations={this.state.vacations} userVacation={this.state.userVacation} />
//                     <CreateMessages handlerCreateMessage={this.handlerCreateMessage} />
//                 </div>
//             </div>
//         );
//     }

//     handlerCreateMessage = (vacation) => {
//         vacation.user = this.state.userVacation;
//         this.socket.emit("SEND_MESSAGE", vacation
//         )
//     }
// }

// export default webSocketvacationClient;