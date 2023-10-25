import React, { useState, useEffect } from 'react';
import { useMediaQuery, Tooltip, Zoom } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {skills_logo} from '../../Constants/constants'
import styles from '../../Styles/swiper.module.css';

// Import Swiper styles & modules
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules';

export default function SkillsSwiper() {

    const isLargeScreen = useMediaQuery('(min-width: 968px)');
    const isMediumScreen = useMediaQuery('(min-width: 712px)');
    const isSmallScreen = useMediaQuery('(min-width: 520px)');
    const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
        if (isLargeScreen) {
             setSlidesPerView(3);
          } else if (isMediumScreen) {
             setSlidesPerView(2);
          } else if (isSmallScreen) {
             setSlidesPerView(1);
          }

  },[isLargeScreen, isMediumScreen, isSmallScreen]);
    

  return (
    <>
    <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
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

      </Swiper>
 </>
  );
}
