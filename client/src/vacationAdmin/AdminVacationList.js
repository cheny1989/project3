import React, { Component } from 'react';
import Admin from "./Admin";
import User from "../numberUsers/User";
import { Chart } from "chart.js";

class AdminVacationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [],
            filterString: ''
        }
        this.canvasRef = React.createRef();
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

    showChart = () => {
        const filterDestination = this.state.vacation;
        const filterFollowers = this.state.vacation.filter(v => v.numberFollow >= 5);
        console.log(filterDestination)
        console.log(filterFollowers)

        const newFilterDestination = this.state.vacation.map((vacation) => ("" + vacation.destination));
        console.log(newFilterDestination)

        const newFilterFolloers = this.state.vacation.map((vacation) => ("" + vacation.numberFollow));
        console.log(newFilterFolloers)

        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            data: {
                labels: newFilterDestination,
                datasets: [{
                    label: "Number of followers",
                    data: newFilterFolloers,
                    backgroundColor: "#0099ff"
                }]
            }
        })
    }


    render() {
        const filterVacation = this.state.vacation.filter(v => v.destination.indexOf(this.state.filterString) >= 0);
        const { loading } = this.state;

        const numberOfVacations = Object.keys(this.state.vacation).length;

        return (
            <div>
                {loading && <div className="loader">Loading...</div>}
                {!loading && <div></div>}

                <br />
                <div className="yourVaacation">All Your Vacations - Admin</div>
                <br />

                <b><label className="lableAndInputFilter">Filter by Destination</label></b>
                <input type="text" className="lableAndInputFilter" placeholder="Enter any Destination..." onChange={(event) => this.filterStringChanged(event)} />

                <User />
                <div className="numberOfVacations">Number of Vacations: <span className="numberOfVacations_span">{numberOfVacations}</span></div>
                <div className="gridVacationListStyle">
                    {filterVacation
                        .sort((s1, s2) => s1.destination - s2.destination)
                        .map(s =>
                            <Admin key={s.id} item={s} />
                        )
                    }
                </div>

                <div>
                    <div className="numberOfFallowers">Number of Followers</div>
                    <button className="numberOfFallowersBtn" onClick={() => this.showChart()}>SHOW CHART</button>
                    <br />
                    <canvas ref={this.canvasRef} />
                </div>

            </div>
        );
    }
}

export default AdminVacationList;