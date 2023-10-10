/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: particleOptions.js
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';



export const options = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: -1,
    
  },

  detectRetina: true,
  fpsLimit: 100,

  interactivity: {
    detectsOn: '#home',
    events: {
      onDiv: [
        // {
        //   selectors: '#repulse-div',
        //   enable: true,
        //   mode: 'bounce',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#repulse-div',
        //   enable: true,
        //   mode: 'repulse',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#repulse-span',
        //   enable: true,
        //   mode: 'repulse',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#repulse-span',
        //   enable: true,
        //   mode: 'bounce',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#togglebutton',
        //   enable: true,
        //   mode: 'repulse',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#togglebutton',
        //   enable: true,
        //   mode: 'bounce',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#scroller',
        //   enable: true,
        //   mode: 'repulse',
        //   type: 'circle',
        // },
        // {
        //   selectors: '#scroller',
        //   enable: true,
        //   mode: 'bounce',
        //   type: 'circle',
        // },
      ],

      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 20,
        color: {
          value: '#cbbde5',
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: 'bounce',
    },
    color: {
      value: '#fff',
    },
    move: {
      angle: {
        offset: 0,
        value: 180,
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 0,
      },
      direction: ['top-left', 'bottom-left', 'bottom-right', 'top-right'],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 5,
      outMode: 'bounce',
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.6,
        maxValue: 0.8,
      },
      value: 0.8,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: 'none',
        startValue: 'random',
      },
    },

    shape: {
      type: 'character',
      character: [
        {
          fill: false,
          font: 'Font Awesome 6 Brands',
          style: '',
          value: [' 💻 '],
          weight: '400',
        },
        {
          fill: false,
          font: 'Font Awesome 6 Brands',
          style: '',
          value: [' 👥'],
          weight: '400',
        },
        {
          fill: true,
          font: 'Font Awesome 6 Brands',
          style: '',
          value: ['🌐'],
          weight: '',
        },
        // {
        //   fill: true,
        //   font: 'Font Awesome 6 Brands',
        //   style: 'width="100px',
        //   value: ['🌐🗣'],
        //   weight: ''
        // },
      ],
    },
    // ✨ ⭐ 🌟 
    // 🌐 🫧
    // 👤 👥 🗣
    // 📱 💻 🖥 
    // 🟡 ⚪ 🔘
    size: {
      random: {
        enable: true,
        minimumValue: 15,
        maxValue: 25,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: 'none',
        startValue: 'random',
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: '#ffffff',
      },
      consent: true,
      distance: 100,
      enable: true,
      frequency: 20,
      opacity: 0.5,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
