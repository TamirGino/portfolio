import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/contact.module.css'
import ThemeBtn from '../Components/elements/Button';
import SkillsSwiper from '../Components/elements/Swiper';
import Form from '../Components/elements/Form'
import { useMediaQuery } from '@mui/material';

function Contact() {
  const isMediumScreen = useMediaQuery('(max-width: 720px)');
  const isSmallScreen = useMediaQuery('(max-width: 420px)');
  const isLandscape = useMediaQuery('(max-height: 720px)');

  return (
    <>
        {/* {/* <div className={styles.projects_container} id="projects"> */}
             
             
<div className={styles.container} id="contact">
          <div className={styles.head} >
                <Typography variant="h6" 
                  sx={{color: '#CDA716', ml:2, display: isLandscape && 'none'}}>
                      LET'S GET IN TOUCH
                </Typography>
                <Typography  variant={isSmallScreen || isLandscape ? 'h3' : isMediumScreen ? 'h2' : 'h1'} >
                    CONTACT ME
                </Typography>
            </div>  

      <div className={styles.box} >
            <Form/>
      </div>
    </div>

    
        </>
  );
}

export default Contact;
