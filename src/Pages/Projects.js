import React from 'react';
import styles from '../Styles/projects.module.css'
import ProjectCard from '../Components/elements/ProjectCard';
import { useMediaQuery } from '@mui/material';
import Title from '../Components/elements/Title';
import {cards_arr} from '../Constants/constants'



function Projects() {

  const isPortrait = useMediaQuery('(max-width: 620px)');
  const isLandscape = useMediaQuery('(max-height: 720px)');

  return (
    <>
              
    <div className={styles.container} id="projects">

      <div className={styles.head} style={{gap:'0px'}}>
      <Title variant_sub={"h6"} subTitle={"RECENTLY DONE"}
            fontSize={ isPortrait ? 65 : isLandscape ?  65 : 80}
            title={"PROJECTS"} sx={{display: isLandscape && 'none'}} />
      </div>

      <div className={styles.box}>
      {cards_arr.slice(0, 6).map((card, index) => (
        <span style={{ '--i': index + 1 }} key={index}>
          <ProjectCard
            title={card.title}
            description={card.description}
            gitLink={card.gitLink}
            viewLink={card.viewLink}
            src_img={card.src_img}
            className={styles.card}
            fontFamily={"Gabarito"}
            marginValue={card.marginTop}
          />
        </span>
      ))}
    </div>
      
    </div>
        </>
  );
}

export default Projects;