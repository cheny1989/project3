// import React, { Component } from 'react';
// // import MainOnePageApplication from "./MainOnePageApplication";
// import Test from "./Test";

// class MainPageFetch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: []
//         }
//     }

//     componentDidMount = () => {
//         this.fatchUser();
//     }

//     async fatchUser() {
//         try {
//             const response = await fetch('/api/apiuser/test');
//             const result = await response.json();
//             this.setState({ user: result });
//         } catch (err) {
//             console.log("ERROR " + err)
//         }
//     };



//     render() {

//         const filterUser = this.state.user;

//         return (
//             <div>
//                 <div>
//                     {filterUser
//                         .sort((s1, s2) => s1.userName - s2.userName)
//                         .map(s =>
//                             <Test key={s.id} item={s} />
//                         )
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// export default MainPageFetch;