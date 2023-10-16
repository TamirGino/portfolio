import React from 'react';
import ParticlesBg from '../Components/particles/ParticlesBg';
import { motion, AnimatePresence } from "framer-motion";
import { Button, IconButton, Typography } from '@mui/material';
import avatar from "../Assets/avatar.png"
import tamir from "../Assets/me1.png"
// import tamir from "../Assets/result.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/home.module.css'
import ThemeBtn from '../Components/elements/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';






function Home() {
  return (
    <>
        <motion.div className={styles.container} 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1  }}
        transition={{ duration: 1.5, }}
        >
        {/* <AnimatePresence exitBeforeEnter> */}
            <div className={styles.left_div}
             > 
                <Typography fontSize={80} fontFamily={"Indie Flower"}
                    sx={{color: '#EFEDFF', mt:5,}}>
                        HI, I'M TAMIR

                        

                        <Typography variant="h4" fontFamily={"Shadows Into Light"} 
                            sx={{color: '#CDA716'}}>
                            <Typewriter
 
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Welcome to my website!")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("I'm passionate")
                                    .pauseFor(500)
                                    .deleteChars(10)
                                    .typeString("cretive")
                                    .pauseFor(200)
                                    .deleteChars(4)
                                    .typeString("ative")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Web developer.")
                                    .start()
                            }}
                        />
                        </Typography>


                </Typography>

                <Typography paragraph fontSize={20} fontFamily={"Short Stack"} 
                    sx={{color: '#EFEDFF', }}> 
                    Excited to show you my work and skills. <br/>
                    Need my service? Feel free to contact me.
                </Typography>
                    
                    
                {/* <ThemeBtn text={"Contact Me"} link={"contact"}/> */} 

                <div>
                <a href="https://github.com/TamirGino" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{color:'white'}}>
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/tamir-gino-5598a321a/" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{color:'white'}}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </a>
                <Link to="/contact">
                    <IconButton sx={{color:'white'}}>
                        <EmailOutlinedIcon fontSize="large" />
                    </IconButton>
                </Link>
                </div>
            
         </div>
            
            
            <div className={styles.right_div}>
                <ParticlesBg style={{position:'absolute'}}/>
                <img className={styles.my_img} alt="avatar" src={tamir}></img>
            </div>

            
            </motion.div>

        </>
  );
}

export default Home;
