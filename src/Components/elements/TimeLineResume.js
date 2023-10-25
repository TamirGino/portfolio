import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {resume_text} from '../../Constants/constants'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

function TimeLineResume() {

const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

return(
    <>
<VerticalTimeline
    layout='1-column-left'
    animate= {true}
>
{resume_text.map(( text, index) =>(
    <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date={<Typography variant='subtitle2' sx={{fontStyle:'italic', ml:2}}>
            {text.date}</Typography>}
        iconStyle={{ background: '#CDA716', color: '#fff' }}
        icon={text.icon}
        visible={true}
        >        
            <Accordion elevation={0} expanded={expanded === index}
             onChange={handleChange(index)}> 
                 <AccordionSummary
                    
                    expandIcon={"👇"}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography component={'span'}  variant='h5'>    
                        {text.title}
                    </Typography>
                 </AccordionSummary> 
                 <AccordionDetails>
                        <Typography variant='subtitle1' mt={-2} component={'span'}
                        sx={{fontWeight:'bold'}}>    
                            {text.subTitle}
                        </Typography>
                    <Typography component={'span'} variant='body2'>
                        {Array.isArray(text.description)
                            ? (
                            <ul>
                                {text.description.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                            )
                            : text.description}
                        </Typography>
                </AccordionDetails> 
                 </Accordion>

    </VerticalTimelineElement>
))}
</VerticalTimeline>
</>
);
};

export default TimeLineResume;