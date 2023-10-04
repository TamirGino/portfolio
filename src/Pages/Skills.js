import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/skills.module.css'
import ThemeBtn from '../Components/elements/Button';
import SkillsSwiper from '../Components/elements/Swiper';

function Skills() {
  return (
    <>
        {/* {/* <div className={styles.projects_container} id="projects"> */}
             
             
<div className={styles.container} >
          <div className={styles.head} id="skills">
                <Typography variant="h6" 
                  sx={{color: '#CDA716', ml:2}}>
                      WHAT DO I USE
                </Typography>
                <Typography  variant="h1" >
                    SKILLS
                </Typography>
            </div>  

      <div className={styles.box} >
            <SkillsSwiper/>
      </div>
    </div>

    
        </>
  );
}

export default Skills;
