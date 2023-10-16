import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import js_logo from '../../Assets/Logos/javascript-logo.png'
import nodeJs_logo from '../../Assets/Logos/nodejs-logo.png'
import html_logo from '../../Assets/Logos/html-logo.png'
import react_logo from '../../Assets/Logos/react-logo.png'
import css_logo from '../../Assets/Logos/css-logo.png'
import python_logo from '../../Assets/Logos/python-logo.png'
import {skills_logo} from '../../Constants/constants'







// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import styles from '../../Styles/Swiper.module.css';

// import required modules
import { Grid, Pagination, Navigation } from 'swiper/modules';
import {  Tooltip, Zoom } from '@mui/material';

export default function SkillsSwiper() {
    const isLargeScreen = useMediaQuery('(min-width: 968px)');
    const isMediumScreen = useMediaQuery('(min-width: 712px)');
    const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {

    if (isLargeScreen) {
        setSlidesPerView(3);
      } else if (isMediumScreen) {
        setSlidesPerView(2);
      }

  },[]);
    

  return (
    <>
    <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }} 
        navigation={true}
        modules={[Grid, Pagination, Navigation]}
        className={styles.swiper}
       
      >
        {skills_logo.map(( logo, index) =>
        (<SwiperSlide className={styles.swiper_slide} key={index}>
            <Tooltip title={logo.title} placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={logo.logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>))}
        {/* <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="React js" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={react_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="Node js" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={nodeJs_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="HTML" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={html_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="CSS" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={css_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="JavaScript" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={js_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="Python" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={python_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="SQL" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={js_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="Mongo DB" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                <img src={nodeJs_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <Tooltip title="Mongo DB" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                    <img src={nodeJs_logo} alt="logo"/>
            </Tooltip>
        </SwiperSlide> */}

      </Swiper>
      
 </>
  );
}
