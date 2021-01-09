import React, { Component } from 'react';
import Admin from "./Admin"
// import MapVacation from "./ "

class AdminVacationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [],
            filterString: ''
          }
    }

    componentDidMount() {
        this.fatchAllVacation();
    }

    async fatchAllVacation() {
        try {
            const response = await fetch('/api/apivacation/get');
            const result = await response.json();
            this.setState({ vacation: result })
        } catch (err) {
            alert(err)
        }
    }
    
    filterStringChanged(e) {
        this.setState({ filterString: e.target.value });
    }


    render() { 
        const filterVacation = this.state.vacation.filter(v => v.destination.indexOf(this.state.filterString) >= 0);

        return ( 
            <div>
                {/* <SliderImage /> */}
                <br />
                <b><label className="lableAndInputFilter">Filter by Destination</label></b>
                <br />
                <input type="text" className="lableAndInputFilter" placeholder="Enter any Destination..." onChange={(event) => this.filterStringChanged(event)} />
                <br />
                <div className="gridVacationListStyle">
                    {filterVacation
                        .sort((s1, s2) => s1.destination - s2.destination)
                        .map(s =>
                            <Admin key={s.id} item={s} />
                        )
                    }
                </div>
            </div>
         );
    }
}
 
export default AdminVacationList;