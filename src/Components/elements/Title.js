import React from 'react';
import {  Typography } from "@mui/material";
import { LazyMotion, domAnimation, motion } from "framer-motion"

const Title = (props) => {
  return (
    <LazyMotion features={domAnimation}>
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
                  fontSize={props.fontSize}
                  sx={{color: '#EFEDFF',cursor:'context-menu',
                         fontFamily: "Love Ya Like A Sister",
                          }}> 
                      {props.title}
                       <br/>          
              </Typography>
              </motion.div>
              </LazyMotion>

  );
};

export default Title;
