import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
import Title from '../Components/elements/Title';



function Projects() {
  const isPortrait = useMediaQuery('(max-width: 620px)');
  const isLandscape = useMediaQuery('(max-height: 720px)');



  return (
    <>
             
             
<div className={styles.container} id="projects">
    <div className={styles.head} style={{gap:'0px'}}>
    <Title variant_sub={"h6"} subTitle={"WHAT I HAVE DONE RECENTLY"}
            // variant_title={isPortrait ? 'h2' : isLandscape ?  'h2' : 'h1'}
            fontSize={ isPortrait ? 65 : isLandscape ?  65 : 80}
            title={"PROJECTS"} sx={{display: isLandscape && 'none'}} />
      </div>
          {/* <motion.div className={styles.head} style={{gap:'0px'}}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
                <Typography variant="h6" 
                  sx={{color: '#CDA716', display: isLandscape && 'none'}}>
                      WHAT I HAVE DONE RECENTLY
                </Typography> 
                <Typography  variant={isPortrait ? 'h2' : isLandscape ?  'h2' : 'h1'}>
                    PROJECTS
                </Typography>
            </motion.div> */}
            

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