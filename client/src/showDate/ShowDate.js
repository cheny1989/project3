import React, { Component } from 'react';

class ShowDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        var intervalDate = setInterval(this.getSnapshotBeforeUpdate, 1000 * 60 * 60);
        this.setState({
            intervalDate: intervalDate
        });
        this.getDate();
    }

    getDate=()=>{
        let textOfDate = document.getElementById("dateToday");
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        textOfDate.innerHTML = dd + "/" + mm + "/" + yyyy
    }

    render() { 
        return (
            <div>
                <div id="dateToday" />
            </div>
          );
    }
}
 
export default ShowDate;