import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/Pages.module.css'
import ThemeBtn from '../Components/elements/Button';
import { about_me_text } from '../Constants/constants';
import TimeLineResume from '../Components/elements/TimeLineResume';

function About() {
  return (
    <>
        <div className={`${styles.home_container} ${styles.about_container}`} id="about">
            <div className={` ${styles.left_div_about}`}>
                <Typography variant="h6" 
                  sx={{color: '#CDA716', alignSelf:'flex-start', ml:2}}>
                      INTRODUCTION
                </Typography>
                <Typography variant="h1" >
                    ABOUT ME
                </Typography>

              <div className={styles.about_me_paragraph}>
                {about_me_text.map((p) =>(
                  <Typography variant="body1"  
                  key={p}
                  sx={{color: '#EFEDFF',textAlign:'center'}}>
                  {p}
              </Typography>
                ))}
                <ThemeBtn text={"Download resume"} />
              </div>
              
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
