import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
// import styles from './projects.module.css'
import styles from '../Styles/projects.module.css'

import ThemeBtn from '../Components/elements/Button';
import { about_me_text } from '../Constants/constants';
import TimeLineResume from '../Components/elements/TimeLineResume';
import avatar from "../Assets/avatar.png"
import ProjectCard from '../Components/elements/ProjectCard';
import { useMediaQuery } from '@mui/material';



function Projects() {
  const isPortrait = useMediaQuery('(max-width: 620px)');
  const isLandscape = useMediaQuery('(max-height: 720px)');



  return (
    <>
             
             
<div className={styles.container} id="projects">
          <div className={styles.head}>
                <Typography variant="h6" 
                  sx={{color: '#CDA716', display: isLandscape && 'none'}}>
                      WHAT I HAVE DONE RECENTLY
                </Typography> 
                <Typography  variant={isPortrait ? 'h2' : isLandscape ?  'h2' : 'h1'}>
                    PROJECTS
                </Typography>
            </div>  
            

      <div className={styles.box}>
        <span style={{'--i': 1}}> <ProjectCard className={styles.card} alt="avatar" /></span>
         <span style={{'--i': 2}}> <ProjectCard className={styles.card} alt="avatar" /></span>
         <span style={{'--i': 3}}> <ProjectCard className={styles.card} alt="avatar" /></span>
        <span style={{'--i': 4}}> <ProjectCard className={styles.card} alt="avatar" /></span>
        <span style={{'--i': 5}}> <ProjectCard className={styles.card} alt="avatar" /></span> 
        <span style={{'--i': 6}}> <ProjectCard className={styles.card} alt="avatar" /></span>
        <span style={{'--i': 7}}> <ProjectCard className={styles.card} alt="avatar" /></span>
        <span style={{'--i': 8}}> <ProjectCard className={styles.card} alt="avatar" /></span>
      </div>
    </div>

    
        </>
  );
}

export default Projects;