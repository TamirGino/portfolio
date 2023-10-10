import React from 'react';
import ParticlesBg from '../Components/particles/ParticlesBg';
import { m, LazyMotion, domAnimation } from "framer-motion";
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




function Home() {
  return (
    <>
        <div className={styles.container} >
            <div className={styles.left_div} > 
                <Typography variant="h2" 
                    sx={{color: '#EFEDFF', mt:5}}>
                        HI, I'M TAMIR <br/>
                        <Typography variant="h4"  
                            sx={{color: '#CDA716'}}>
                            Web developer
                        </Typography>
                </Typography>

                <Typography paragraph variant="subtitle1"  
                    sx={{color: '#EFEDFF', }}>
                    B.Sc. in industrial engineering and management,<br/> 
                    graduated from AFEKA college of engineering.<br/>
                    Passionate for new challenges, high interest in programming.
                </Typography>
                    
                    
                {/* <ThemeBtn text={"Contact Me"} link={"contact"}/> */}

                <div>
                    <IconButton sx={{color:'white'}}>
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton sx={{color:'white'}}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton sx={{color:'white'}}>
                        <EmailOutlinedIcon fontSize="large" />
                    </IconButton>
                </div>
                
            
            </div>

            {/* <div className={styles.scroller}> 
                <Scroller/>
            </div> */}
            
            
            <div className={styles.right_div}>
                <ParticlesBg style={{position:'absolute'}}/>
                <img className={styles.my_img} alt="avatar" src={tamir}></img>
            </div>

            
        </div>

        </>
  );
}

export default Home;
