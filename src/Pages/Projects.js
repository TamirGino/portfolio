import React, { useEffect } from 'react';
import styles from '../Styles/projects.module.css'
import ProjectCard from '../Components/elements/ProjectCard';
import { useMediaQuery } from '@mui/material';
import Title from '../Components/elements/Title';
import {cards_arr} from '../Constants/constants'



function Projects() {

  const isPortrait = useMediaQuery("(max-width: 620px)");
  const isLandscape = useMediaQuery("(max-height: 720px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // number of cards currently displayed
  const visibleCards = cards_arr.slice(0, 5);
  const cardCount = visibleCards.length;

  return (
    <>
      <div className={styles.container} id="projects">

        {/* HEADER */}
        <div className={styles.head}>
          <Title
            variant_sub={"h6"}
            subTitle={"RECENTLY DONE"}
            fontSize={
              isPortrait
                ? 65
                : isLandscape
                ? 65
                : 80
            }
            title={"PROJECTS"}
            sx={{ display: isLandscape && "none" }}
          />
        </div>

        {/* 3D ROTATING BOX */}
        <div
          className={styles.box}
          style={{ "--count": cardCount }}
        >
          {visibleCards.map((card, index) => (
            <span
              key={index}
              style={{ "--i": index }}
            >
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