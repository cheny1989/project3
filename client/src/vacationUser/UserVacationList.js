import React, { Component } from 'react';
import User from "./User"

class UserVacationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [],
            filterString: '',
            loading: false,
        }
    }

    componentDidMount() {
        this.fatchAllVacation();
        this.fetchData();
    }

    fetchData = () => {
        this.setState({ loading: true });
    };

    stopFatch = () => {
        this.setState({ loading: false });
    }

    async fatchAllVacation() {
        try {
            const response = await fetch('/api/apivacation/get');
            const result = await response.json();
            this.setState({ vacation: result })
            this.stopFatch();
        } catch (err) {
            alert(err)
        }
    }

    filterStringChanged(e) {
        this.setState({ filterString: e.target.value });
    }

    render() {

        const filterVacation = this.state.vacation.filter(v => v.destination.indexOf(this.state.filterString) >= 0);
        const { loading } = this.state;
        const numberOfVacations = Object.keys(this.state.vacation).length;

        return (
            <div>
                <br />
                <div className="helloUser">Welcome - Enjoy Every Moment</div>
                <hr />
                {/* <SliderImage /> */}
                {loading && <div className="loader">Loading...</div>}
                {!loading && <div></div>}
                <br />
                <b><label className="lableAndInputFilter">Filter by Destination</label></b>
                <input type="text" className="lableAndInputFilter" placeholder="Enter any Destination..." onChange={(event) => this.filterStringChanged(event)} />
                <br />
                <div className="numberOfVacations">Number of Vacations: <span className="numberOfVacations_span">{numberOfVacations}</span></div>
                <div className="gridVacationListStyle">
                    {filterVacation
                        .sort((s1, s2) => s1.destination - s2.destination)
                        .map(s =>
                            <User key={s.id} item={s} />
                        )
                    }
                </div>
            </div>

        );
    }
}

export default UserVacationList;

