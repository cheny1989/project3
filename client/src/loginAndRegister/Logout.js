import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="logout">
                    <table>
                        <tr className="tr_first">
                            <th className="th_first">Thank You</th>
                        </tr>
                        <tr className="tr_second">
                            <th>Let the journey begin...</th>
                        </tr>
                    </table>
                </div>
            </div>
          );
    }
}
 
export default Logout;