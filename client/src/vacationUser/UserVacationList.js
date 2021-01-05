import React, { Component } from 'react';
import User from "./User"

class UserVacationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacation: [],
            filterString: ''
        }
    }

    componentDidMount() {
        this.fatchALlComment();
    }

    async fatchALlComment() {
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

        const filterComment = this.state.vacation.filter(v => v.destination.indexOf(this.state.filterString) >= 0);

        return (
            <div>
                <b><label>Filter by Destination</label></b>
                <br />
                <input type="text" onChange={(event) => this.filterStringChanged(event)} />

                {filterComment
                .sort((s1, s2)=> s1.destination - s2.destination)
                .map(s=>
                   <User key={s.id} item={s} /> 
                    )
                }
            </div>
        );
    }
}

export default UserVacationList;