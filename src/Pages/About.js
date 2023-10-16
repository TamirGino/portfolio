import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {  Typography } from '@mui/material';
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/about.module.css'
import ThemeBtn from '../Components/elements/Button';
import { about_me_text } from '../Constants/constants';
import TimeLineResume from '../Components/elements/TimeLineResume';
import Title from '../Components/elements/Title';
import pdf_file from '../Assets/Tamir Gino.pdf'

function About() {
  return (
    <>
        <div className={styles.container} id="about">
        <div className={styles.left_div} >
          <Title variant_sub={"h6"} subTitle={"INTRODUCTION"}
                 fontSize={80} title={"ABOUT ME"} sx={{ml:2}} />
            {/* <motion.div style={{gap:'0px'}}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
              <Typography variant="h6"
                sx={{color: '#CDA716', ml:2}}   
                  >
                  INTRODUCTION
              </Typography>
              <Typography variant="h1" 
                  sx={{color: '#EFEDFF'}}>
                      ABOUT ME          
              </Typography>
              </motion.div> */}

              <motion.div style={{gap:'0px'}}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >
                {about_me_text.map((p) =>(
                  <Typography fontSize={20} fontFamily={"Short Stack"}  
                    key={p}
                    sx={{color: '#EFEDFF', }}>
                    {p}
                    {/* <Typography></Typography>   */}
                  </Typography>
                  
                ))}
              </motion.div>
              
              <a
                  href={pdf_file}
                  download="Tamir_Gino_CV"
                  target="_blank"
                  rel="noreferrer"
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
