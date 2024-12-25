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
import wm from '../Assets/Imgs/world_map.png'
import wf1 from '../Assets/Imgs/webflow1.png'
import wf2 from '../Assets/Imgs/webflow2.png'


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
    "I'm a 30 year old programmer from Tel Aviv, Israel.",
    "I have experience in both the high-tech industry and freelancing, specializing in web development.",
    "I hold a B.Sc. in industrial engineering and management, which has equipped me with a unique blend of problem-solving skills and efficiency.",
    "What sets me apart is my unrelenting passion for taking on new challenges. Always eager to explore the creative possibilities that technology offers.",
] 

const resume_text = [
    {
        title:"Freelancer",
        subTitle:"Web developer freelance - Tel Aviv, IL",
        description:["As a freelance web designer and developer, I worked with two different clients to transform ideas into visually stunning and responsive online experiences. Want to see what I’ve been working on? Head over to the Projects page to explore my portfolio of work!"],
        date:"Nov 2023 - Jan 2024",
        icon: <LaptopMacIcon />
    },
     {
        title:"Employment",
        subTitle:"Frontend developer, Beecomm, Tel-Aviv, IL",
        description:["Design and develop web applications using React and Node js.",
         "Engaged in problem-solving, maintenance, and the incorporation of new features to meet client-specific requirements.",
         "Utilized Visual Basic and SQL in conjunction with the Microsoft Access database to ensure efficient data management.",
         "Played a pivotal role in enhancing client satisfaction through active participation in software updates and improvements."],
        date:"May 2022 - Sep 2023",
        icon: <WorkOutlineOutlinedIcon />
    },
     {
        title:"Education ",
        subTitle:"B.sc in Industrial Engineering & Management at Afeka Academic College of Engineering, Tel Aviv, IL",
        description:["Courses: Databases and Data-Warehouse Systems, Object-Oriented Programming and Design, Web Programming with UX-UI, Data Engineering.", "Specialization: Information Systems Analysis, Machine Learning."],
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
        gitLink:"https://github.com/TamirGino/face-detection-app",
        viewLink:"https://clarifai-face-detection.web.app/",
        src_img:fd,
        marginTop:1,
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
        title:"Travel Advisor",
        description: "An awsome app powered by Google Maps and RapidAPI. Users can explore destinations, access real-time data on restaurants, hotels, attractions and weather, all within a visually cool UI.",
        gitLink:"https://github.com/TamirGino/travel-advisor",
        viewLink:"https://travel-advisor-4u.web.app/",
        src_img:wm,
        marginTop:1,
    },
    {
        title:"Memory Game",
        description: "Step into a futuristic world of memory mastery with Robot Memory Challenge, a web app I've created by seamlessly integrating a cool robots API to test your cognitive skills.",
        gitLink:"https://github.com/TamirGino/memory-game",
        viewLink:"https://how-good-is-your-memory.web.app/",
        src_img:qm,
        marginTop:2,
    },
    {
        title:"Webflow Pr. #1",
        description: "Crafted upon a client's request for a compounded interest calculator. Calculates total profit and generates Visually graph depict investment growth over time for better financial planning.",
        gitLink:"",
        viewLink:"https://www.ynow.co.il/ynow-mkhshbvn-rybyt-drybyt",
        src_img:wf1,
        marginTop:1,
    },
    {
        title:"Webflow Pr. #2",
        description: "This user-friendly mortgage calculator simplifies financial planning. Users input key details, and it calculates the monthly payment, helping users make informed decisions about their financing.",
        gitLink:"",
        viewLink:"https://www.ynow.co.il/mortgage-calculator",
        src_img:wf2,
        marginTop:1,
    },
    
]



export {
  theme,
  about_me_text,
  resume_text,
  skills_logo,
  cards_arr,
}