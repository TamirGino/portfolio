import React, { useState, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FadeInOut from '../elements/FadeInOut' 
import { IconButton, Tooltip, Card, CardActions, CardContent,Button, Typography, Fade } from '@mui/material';

export default function ProjectCard(props) {

  const src = props.src_img
  const [show, setShow] = useState(false);

  const extraStyles = {
    position:'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    maxHeight: 250,
    cursor: 'pointer'
  };

  const handleChange = () => {
    setTimeout(()=> {setShow(!show);
    }, 200)
  };


  return (
    
    <Card 
    sx={{ display:'flex',flexDirection:'column',justifyContent:'center',
         maxWidth: 250, maxHeight: 250, position:'relative', 
         background: `linear-gradient(rgba(255,255,255,1), rgba(0,0,0,.2)), url(${src}) center no-repeat`,
          '&:hover ': {
            cursor: 'pointer',
        },
        }}
          >
      <div onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <CardContent sx={{  height:180, width: 118 }}
       >
        <FadeInOut show={show} duration={500} style={extraStyles}>
        <Typography align='center' fontSize={16} sx={{mt:2, fontWeight:'bold', color:'white' }} variant="caption" component="h2">
          {props.title}
        </Typography>
        <Typography fontSize={12} sx={{paddingRight:2,paddingLeft:2, mt:props.marginValue, color:'white' }}  variant="body2" fontFamily={props.fontFamily}>
            {props.description} 
        </Typography>
        </FadeInOut>
      </CardContent>
      
      <CardActions sx={{display:'flex', flexDirection:'row', alignContent:'center',gap:'30px',
       padding:1,borderTop:'0px solid #17182B', }}>
            <Tooltip title="View Git">
              <IconButton sx={{color:'white'}} size="small" 
              onClick={() => window.open(props.gitLink, '_blank')}>
                      <GitHubIcon fontSize="medium" />
              </IconButton>
            </Tooltip> 
            <Button sx={{fontSize:'8px', color:'#CDA716', fontWeight:'bold',
            borderColor: '#CDA716',
            '&:hover': {
              borderColor: '#CDA716',
            },
           }} size="small" variant='outlined'
            onClick={() => window.open(props.viewLink, '_blank')}>
              View Live
            </Button>
      </CardActions>
      </div>
    </Card>
    
  );
}