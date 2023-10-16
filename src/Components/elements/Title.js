import React from 'react';
import {  Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from '../../Styles/fonts.module.css'


const Title = (props) => {
  return (
    
    <motion.div style={{gap:'0px'}}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
              <Typography variant={props.variant_sub}
                sx={{color: '#CDA716', cursor:'context-menu',
                fontFamily: "Dancing Script"
                , ...props.sx}}  
                  >
                  {props.subTitle}
              </Typography>
              <Typography 
            //   Love Ya Like A Sister\ italiana
                  fontSize={props.fontSize}
                  sx={{color: '#EFEDFF',cursor:'context-menu',
                         fontFamily: "Love Ya Like A Sister",
                          }}> 
                      {props.title}
                       <br/>          
              </Typography>
              </motion.div>


  );
};

export default Title;
