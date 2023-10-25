import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Form from '../Components/elements/Form'
import { useMediaQuery } from '@mui/material';
import Title from '../Components/elements/Title';
import styles from '../Styles/contact.module.css'

function Contact() {

  const isMediumScreen = useMediaQuery('(max-width: 720px)');
  const isSmallScreen = useMediaQuery('(max-width: 420px)');
  const isLandscape = useMediaQuery('(max-height: 720px)');

  return (
    <>             
             
<div className={styles.container} id="contact">
      <div className={styles.head}>
        <Title variant_sub={"h6"} subTitle={"LET'S GET IN TOUCH"}
                fontSize={isSmallScreen || isLandscape ? 50 : isMediumScreen ? 65 : 80}
                title={"CONTACT ME"} sx={{ml:2, display: isLandscape && 'none'}} />
      </div>

      <div className={styles.box} >
        <motion.div style={{gap:'0px'}}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
              <Form/>
        </motion.div>
      </div>
    </div>
        </>
  );
}

export default Contact;
