import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import face_detection_img from '../../Assets/face_detection_img.png'
import ThemeBtn from '../elements/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip } from '@mui/material';


export default function ProjectCard() {
  return (
    <Card sx={{ display:'flex',flexDirection:'column',justifyContent:'center',
         maxWidth: 250, maxHeight: 250, oosition:'relative', 
        //  backgroundImage: `url(${require('../../Assets/face_detection_img.png')})`, // Replace with your image URL
         backgroundSize: 'cover', // Adjust to your preference
         backgroundPosition: 'center', // Adjust to your preference
         background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.9)), url(${require('../../Assets/face_detection_img.png')})`,
          }}>
        
      {/* <CardMedia
        sx={{ height: '120px important!', width: 150, posision:'absolute' }}
        image={require('../../Assets/face_detection_img.png')}
        title="face detection"
      /> */}
      
      <CardContent sx={{  height:180, width: 100  }} >
        <Typography align='center' sx={{fontSize:'12px'}} gutterBottom variant="caption" component="div">
          Face Detection App
        </Typography>
        <Typography sx={{fontSize:'10px', mt:3}}  variant="body2" color="text.secondary">
            Face detection website with a
            login form. Enjoy exploring this amazing AI feature that also count the numbers of times.
            React js, node js, Mongo DB. 
        </Typography>
      </CardContent>
      {/* <hr></hr> */}
      <CardActions sx={{display:'flex', flexDirection:'row', alignContent:'center', padding:1}} >
      <Tooltip title="View Git">
        <IconButton sx={{color:'black'}} size="small">
                <GitHubIcon fontSize="medium" />
        </IconButton>
     </Tooltip>
            {/* <GitHubIcon size="large" sx={{fontSize:'20px', cursor:'pointer'}}  >View git</GitHubIcon> */}
            <Button sx={{fontSize:'10px', color:'#CDA716', fontWeight:'bold' }} size="small">View Live</Button>
        
        {/* <ThemeBtn  text={"Watch live"} sx={{fontSize:'10px'}} size="small"></ThemeBtn> */}
      </CardActions>
    </Card>
  );
}