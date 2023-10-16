import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/skills.module.css'
import ThemeBtn from '../Components/elements/Button';
import SkillsSwiper from '../Components/elements/Swiper';
import { useMediaQuery } from '@mui/material';
import Title from '../Components/elements/Title';



function Skills() {
  const isLandscape = useMediaQuery('(max-height: 720px)');

  return (
    <>
        {/* {/* <div className={styles.projects_container} id="projects"> */}
             
             
<div className={styles.container} >
<div className={styles.head}>
    <Title variant_sub={"h6"} subTitle={"WHAT DO I USE"}
            fontSize={80}
            title={"SKILLS"} sx={{ml:2, display: isLandscape && 'none'}} />
      </div>
          {/* <div className={styles.head} id="skills">
                <Typography variant="h6" 
                  sx={{color: '#CDA716', ml:2, display: isLandscape && 'none'}}>
                      WHAT DO I USE
                </Typography>
                <Typography  variant="h1" >
                    SKILLS
                </Typography>
            </div>   */}

      <div className={styles.skillsBox} >
            <SkillsSwiper/>
      </div>
    </div>

    
        </>
  );
}

export default Skills;
