import React from 'react';
import ParticlesBg from '../Components/particles/ParticlesBg';
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button, Typography } from '@mui/material';
import avatar from "../Assets/avatar.png"
import tamir from "../Assets/me2.png"
import Scroller from '../Components/elements/Scroller';
import styles from '../Styles/Pages.module.css'
import ThemeBtn from '../Components/elements/Button';


function Home() {
  return (
    <>
        <div className={styles.home_container} >
            <div className={styles.left_div} >
                <Typography variant="h1" component="h2">
                    TAMIR GINO
                </Typography>
                <Typography variant="h4" component="h2" 
                sx={{color: '#CDA716'}}>
                    Web developer
                </Typography>
                <br></br>
                <ThemeBtn text={"Contact Me"} link={"contact"}/>
            
            </div>

            <div className={styles.scroller}> 
                <Scroller/>
            </div>
            
            
            <div className={styles.right_div}>
                {/* <ParticlesBg style={{position:'absolute'}}/> */}
                <img className={styles.my_img} alt="avatar" src={tamir}></img>
            </div>

            
        </div>

        </>
  );
}

export default Home;
