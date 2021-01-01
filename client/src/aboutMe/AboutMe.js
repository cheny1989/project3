import React, { Component } from 'react';
import UseStyles from "../UseStyles"

class AboutME extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                Hello My name is Chen Yaacov

                {/* change to Accordion */}
                <UseStyles />
            </div>
          );
    }
}
 
export default AboutME;