import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ExpandMoreIcon from '@mui/icons-material/LaptopMac';
import {resume_text} from '../../Constants/constants'


import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';



function TimeLineResume() {
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
        // contentStyle={{ color: 'black' }} //⏬
        // contentStyle={<Typography variant='h6'></Typography>}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        // date={'\u00A0 \u00A0 \u00A0' + text.date + '\u00A0 \u00A0 \u00A0'}
        date={<Typography variant='subtitle2' sx={{fontStyle:'italic', ml:2}}>
            {text.date}</Typography>}
        iconStyle={{ background: '#CDA716', color: '#fff' }}
        icon={<LaptopMacIcon /> }
        visible='tr'
        >        

            <Accordion elevation={0} sx={{}}> 
                 <AccordionSummary
                    
                    expandIcon={"👇"}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography  variant='h5'>    
                        {text.title}
                    </Typography>
                 </AccordionSummary> 
                 <AccordionDetails>
                        <Typography variant='subtitle1' mt={-2}
                        sx={{fontWeight:'bold'}}>    
                            {text.subTitle}
                        </Typography>
                    <Typography variant='body2'>
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