import { createTheme } from '@mui/material/styles';
//icons
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
//logos
import react_logo from '../Assets/Logos/react-logo.png'
import js_logo from '../Assets/Logos/javascript-logo.png'
import nodeJs_logo from '../Assets/Logos/nodejs-logo.png'
import html_logo from '../Assets/Logos/html-logo.png'
import css_logo from '../Assets/Logos/css-logo.png'
import python_logo from '../Assets/Logos/python-logo.png'
import sql_logo from '../Assets/Logos/sql_logo.png'
import mongo_logo from '../Assets/Logos/mongo_logo.png'
import git_logo from '../Assets/Logos/git_logo.png'
import firebase_logo from '../Assets/Logos/firebase_logo.png'
import vscode_logo from '../Assets/Logos/vscode_logo.png'
import figma_logo from '../Assets/Logos/figma_logo.png'
//imgs
import fd from '../Assets/Imgs/face_detection.png'
import qm from '../Assets/Imgs/question_mark.png'
import ob from '../Assets/Imgs/nutriSurvey.png'

const theme = createTheme({
  palette: {
      background: {
          main: '#17182B',
      },
      background_light: {
          main: '#434359',
      },
      title: {
          main: '#EFEDFF',
      },
      
      subtitle: {
          main: '#CDA716',
      },
  },
});

const about_me_text =[
    "I'm a 29 years old programmer from Tel Aviv, Israel.",
    "I have experience both in the High-Tech industry and as a freelancer, in the field of web development.",
    "B.Sc. in industrial engineering and management.",
    "Creative and passionate for new challenges.",
    "Self-Learner, analytical and a great team player."
] 

const resume_text = [
    {
        title:"Freelancer",
        subTitle:"Web developer freelance - Tel Aviv, IL",
        description:["Working as a freelancer, designing and developing web pages using Webflow platform. "],
        date:"Aug 2023 - present",
        icon: <LaptopMacIcon />
    },
     {
        title:"Employment",
        subTitle:"Programmer, Beecomm, Tel-Aviv, IL",
        description:["Design and develop web applications using React and Node js.", "Solve problems, maintain and develop new features according to the client's needs, using Visual Basic and SQL with Microsoft Access database.", "Assist in software updating in order to improve client's satisfaction."],
        date:"May 2022 - Aug 2023",
        icon: <WorkOutlineOutlinedIcon />
    },
     {
        title:"Education ",
        subTitle:"B.sc in Industrial Engineering & Management at Afeka Academic College of Engineering, Tel Aviv, IL",
        description:["Courses: Databases and Data-Warehouse systems, object-oriented programming, web programming and UX-UI, data engineering.", "Specialiqation: Information systems analysis, machine learning"],
        date:"2018 - 2022",
        icon: <SchoolOutlinedIcon />
    },
] ;

const skills_logo = [
    {
        title:"React js",
        logo: react_logo,
    },
     {
        title:"Node js",
        logo: nodeJs_logo,
    },
    {
        title:"HTML5",
        logo: html_logo,
    },
     {
        title:"CSS3",
        logo: css_logo,
    },
    {
        title:"JavaScript",
        logo: js_logo,
    },
     {
        title:"Python",
        logo: python_logo,
    },
    {
        title:"SQL",
        logo: sql_logo,
    },
     {
        title:"MongoDB",
        logo: mongo_logo,
    },
    {
        title:"Git",
        logo: git_logo,
    },
     {
        title:"Firebade",
        logo: firebase_logo,
    },
    {
        title:"Visual Studio Code",
        logo: vscode_logo,
    },
     {
        title:"Figma",
        logo: figma_logo,
    },
]

const cards_arr = [
    {
        title:"Face Detection",
        description: "This full-stack web project combines React and Node.js with MongoDB to deliver a seamless user experience. The app utilizes the Clarifai API to detect faces in images when users insert a URL.",
        gitLink:"https://github.com/TamirGino/Face-detection-App",
        viewLink:"https://face-detection-app-ce7r.onrender.com",
        src_img:fd,
        marginTop:1,
    },
    {
        title:"Memory Game",
        description: "Step into a futuristic world of memory mastery with Robot Memory Challenge, a web app I've created by seamlessly integrating a cool robots API to test your cognitive skills.",
        gitLink:"https://github.com/TamirGino/Cool-App",
        viewLink:"https://how-good-is-your-memory.web.app/",
        src_img:qm,
        marginTop:2,
    },
    {
        title:"NutriSurvey Portfolio",
        description: "A comprehensive platform designed to empower my nutritionist client and improve his connection with clients on their wellness journey.",
        gitLink:"https://github.com/TamirGino/oren-braude",
        viewLink:"https://project-oren-377a1.web.app/",
        src_img:ob,
        marginTop:1,
    },
    {
        title:"Face Detection",
        description: "This full-stack web project combines React and Node.js with MongoDB to deliver a seamless user experience. The app utilizes the Clarifai API to detect faces in images when users insert a URL.",
        gitLink:"https://github.com/TamirGino/Face-detection-App",
        viewLink:"https://face-detection-app-ce7r.onrender.com",
        src_img:fd,
        marginTop:1,
    },
    {
        title:"Memory Game",
        description: "Step into a futuristic world of memory mastery with Robot Memory Challenge, a web app I've created by seamlessly integrating a cool robots API to test your cognitive skills.",
        gitLink:"https://github.com/TamirGino/Cool-App",
        viewLink:"https://how-good-is-your-memory.web.app/",
        src_img:qm,
        marginTop:2,
    },
    {
        title:"NutriSurvey Portfolio",
        description: "A comprehensive platform designed to empower my nutritionist client and improve his connection with clients on their wellness journey.",
        gitLink:"https://github.com/TamirGino/oren-braude",
        viewLink:"https://project-oren-377a1.web.app/",
        src_img:ob,
        marginTop:1,
    },
    {
        title:"Face Detection",
        description: "This full-stack web project combines React and Node.js with MongoDB to deliver a seamless user experience. The app utilizes the Clarifai API to detect faces in images when users insert a URL.",
        gitLink:"https://github.com/TamirGino/Face-detection-App",
        viewLink:"https://face-detection-app-ce7r.onrender.com",
        src_img:fd,
        marginTop:1,
    },
    {
        title:"Memory Game",
        description: "Step into a futuristic world of memory mastery with Robot Memory Challenge, a web app I've created by seamlessly integrating a cool robots API to test your cognitive skills.",
        gitLink:"https://github.com/TamirGino/Cool-App",
        viewLink:"https://how-good-is-your-memory.web.app/",
        src_img:qm,
        marginTop:2,
    },
    
]



export {
  theme,
  about_me_text,
  resume_text,
  skills_logo,
  cards_arr,
}