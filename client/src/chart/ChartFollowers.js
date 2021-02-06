import React, { Component } from 'react';
import { Chart } from "chart.js"

class ChartFollowers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
          this.canvasRef = React.createRef();
    }

    componentDidMount(){
        const { item } = this.props;
        // const old = [item.numberFollow];
        // console.log(old)

        const vacation = ["vac1", "vac2", "vac3", "vac4"]
        const followers = [25, 20, 30, 15]

        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            data: {
                labels: vacation,
                datasets: [{
                    label: "Number of followers",
                    data: followers,
                    backgroundColor: "#0099ff"
                }]
            }
        })
    }

    

    render() { 
        return (
            <div>
                <canvas ref={this.canvasRef}/>
            </div>
          );
    }
}
 
export default ChartFollowers;