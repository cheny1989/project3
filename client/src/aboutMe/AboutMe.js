import React, { Component } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

class AboutME extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                Hello My name is Chen Yaacov
                {/* <Accordion>
                    <AccordionSummary>
                        <Typography>Show / Hide - Create Vacation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                     Hello My name is Chen Yaacov
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* change to Accordion */}
            </div>
          );
    }
}
 
export default AboutME;