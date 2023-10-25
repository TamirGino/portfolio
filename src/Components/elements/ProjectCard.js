import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip, Card, CardActions, CardContent,Button, Typography } from '@mui/material';

export default function ProjectCard(props) {
  const src = props.src_img
  return (
    <Card sx={{ display:'flex',flexDirection:'column',justifyContent:'center',
         maxWidth: 250, maxHeight: 250, position:'relative', 
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'contain', 
         backgroundPosition: 'center', 
         background: `linear-gradient(rgba(255,255,255,.9), rgba(100,100,100,.2)), url(${src}) center no-repeat`

          }}>
      <CardContent sx={{  height:180, width: 100  }} >
        <Typography align='center' sx={{fontSize:'12px',fontWeight:'bold', color:'black'}} gutterBottom variant="caption" component="div">
          {props.title}
        </Typography>
        <Typography sx={{fontSize:'10px', fontWeight:'bold', mt:3, color:'black'}}  variant="body2" fontFamily={props.fontFamily}>
            {props.description} 
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', flexDirection:'row', alignContent:'center',gap:'30px', padding:1}} >
            <Tooltip title="View Git">
              <IconButton sx={{color:'black'}} size="small" 
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
    </Card>
  );
}