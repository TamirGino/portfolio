import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/about.module.css'
import ThemeBtn from '../Components/elements/Button';
import { about_me_text } from '../Constants/constants';
import TimeLineResume from '../Components/elements/TimeLineResume';

function About() {
  return (
    <>
        <div className={styles.container} id="about">
          <div className={styles.left_div} > 
            <div style={{gap:'0px'}}>
              <Typography variant="h6"
                sx={{color: '#CDA716', ml:2}}  
                  >
                  INTRODUCTION
              </Typography>
              <Typography variant="h1" 
                  sx={{color: '#EFEDFF'}}>
                      ABOUT ME <br/>          
              </Typography>
              </div>
              <div style={{gap:'0px'}}>
                {about_me_text.map((p) =>(
                  <Typography variant="body1"  
                    key={p}
                    sx={{color: '#EFEDFF', }}>
                    {p}
                    
                  </Typography>
                  
                ))}
              </div>
              
              
                <ThemeBtn text={"Download CV"} />
              
              
            </div>
            
            <div className={styles.right_div}>
              <div style={{overflowY: 'scroll',paddingRight: '0px'}}>
                <TimeLineResume />
                </div>
            </div>

            
        </div>
    
        </>
  );
}

export default About;
