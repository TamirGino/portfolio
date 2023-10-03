import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from './projects.module.css'
import ThemeBtn from '../Components/elements/Button';
import { about_me_text } from '../Constants/constants';
import TimeLineResume from '../Components/elements/TimeLineResume';
import avatar from "../Assets/avatar.png"
import ProjectCard from '../Components/elements/ProjectCard';

function Projects() {
  return (
    <>
        {/* {/* <div className={styles.projects_container} id="projects"> */}
             
             
<div className={styles.projects_container} id="projects">
          <div className={styles.projects_head}>
                <Typography variant="h6" 
                  sx={{color: '#CDA716', ml:2}}>
                      WHAT I HAVE DONE RECENTLY
                </Typography>
                <Typography  variant="h1" >
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
