import React from 'react';
import SkillsSwiper from '../Components/elements/Swiper';
import { useMediaQuery } from '@mui/material';
import Title from '../Components/elements/Title';
import styles from '../Styles/skills.module.css'

function Skills() {

  const isLandscape = useMediaQuery('(max-height: 720px)');

  return (
    <>          
  <div className={styles.container} >
  <div className={styles.head}>
    <Title variant_sub={"h6"} subTitle={"TOOLS & TECHNOLOGIES"}
            fontSize={80}
            title={"SKILLS"} sx={{ml:2, display: isLandscape && 'none'}} />
      </div>
      <div className={styles.skillsBox} >
            <SkillsSwiper/>
      </div>
    </div>
        </>
  );
}

export default Skills;
