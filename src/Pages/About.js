import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {  Typography } from '@mui/material';
import { about_me_text } from '../Constants/constants';
import ThemeBtn from '../Components/elements/Button';
import TimeLineResume from '../Components/elements/TimeLineResume';
import Title from '../Components/elements/Title';
import pdf_file from '../Assets/Docs/Tamir_Gino.pdf'
import styles from '../Styles/about.module.css'
import { useMediaQuery } from '@mui/material';

function About() {
  const isMediumScreen = useMediaQuery('(max-width: 520px) ');
  const isSmallScreen = useMediaQuery('(max-width: 420px)');
  const isMaxHeight = useMediaQuery('(max-height: 600px)');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <div className={styles.container} id="about">
        <div className={styles.left_div} >
          <Title variant_sub={"h6"} subTitle={"INTRODUCTION"}
                 fontSize={ isMediumScreen || isSmallScreen || isMaxHeight?  60 : 80}
                  title={"ABOUT ME"} sx={{ml:2}} />
              <motion.div style={{gap:'0px'}}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              >
                {about_me_text.map((p) =>(
                  <Typography 
                    fontFamily={"Short Stack"}
                    fontSize={ isMaxHeight ? 12 : isSmallScreen ? 14 : isMediumScreen ?  16 : 20}  
                    key={p}
                    sx={{color: '#EFEDFF', }}>
                    {p}                
                  </Typography>
                ))}
              </motion.div>
              
              <a
                  href={pdf_file}
                  download="Tamir_Gino_CV"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.no_underline}
                >
                <ThemeBtn text={"Download CV"} />
                </a>
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
