import React from 'react';
import { motion } from "framer-motion";
import { IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import ParticlesBg from '../Components/particles/ParticlesBg';
import styles from '../Styles/home.module.css'
import my_img from "../Assets/Imgs/me1.png"

function Home() {
  return (
    <>
    <motion.div className={styles.container} 
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1  }}
    transition={{ duration: 1.5, }}
    >
        <div className={styles.left_div}
            > 
        <Typography fontSize={80} fontFamily={"Indie Flower"} component={"div"}
            sx={{color: '#EFEDFF', mt:5,}}>
                HI, I'M TAMIR
                <Typography variant="h4" fontFamily={"Shadows Into Light"} component={"div"} 
                    sx={{color: '#CDA716'}}>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Welcome to my website!")
                            .pauseFor(4000)
                            .deleteAll()
                            .typeString("Web developer.")
                            .start()
                    }}
                />
                </Typography>
        </Typography>
            <Typography paragraph fontSize={20} fontFamily={"Short Stack"} component={"div"}
                sx={{color: '#EFEDFF', }}> 
                Excited to show you my work and skills. <br/>
                Need my service? Feel free to contact me.
            </Typography>
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
            <img className={styles.my_img} alt="my-img" src={my_img}></img>
        </div>

        </motion.div>

        </>
  );
}

export default Home;
