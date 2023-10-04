import { createTheme } from '@mui/material/styles';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

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
    "B.Sc. in industrial engineering and management, graduated from AFEKA college of engineering.",
    "Passionate for new challenges, high interest in programming, innovation and technology.",
    "Self-Learner, analytical and a great team player. Looking for my next challenge in the High-Tech Industry."
] 

const resume_text = [
    {
        title:"Web Flow",
        subTitle:"Freelancer - Tel Aviv, IL",
        description:"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
        date:"Aug 2023 - present",
        icon: <LaptopMacIcon />
    },
     {
        title:"Employment",
        subTitle:"Programmer, Beecomm, Tel-Aviv, Israel",
        description:["Design and develop web applications using React and node js.", "Solve problems, maintain and develop new features according to the client's needs, using Visual Basic and SQL with Microsoft Access database.", "Assist in software updating in order to improve client's satisfaction."],
        date:"May 2022 - Aug 2023",
        icon: <WorkOutlineOutlinedIcon />
    },
     {
        title:"Education ",
        subTitle:"B.sc in Industrial Engineering & Management at Afeka Academic College of Engineering, Tel Aviv",
        description:["Courses: Databases and Data-Warehouse systems, object-oriented programming, web programming and UX-UI, data engineering.", "Specialiqation: Information systems analysis, machine learning"],
        date:"2018 - 2022",
        icon: <SchoolOutlinedIcon />
    },
    // {
    //     title:"Military Service",
    //     subTitle:"Infantry division - combat soldier, NAHAL unit",
    //     description:"Served three years in the IDF as a combat soldier in NAHAL unit, 931 regiment",
    //     date:"2013 - 2016",
    //     icon: <SchoolOutlinedIcon />
    // },

] ;


export {
  theme,
  about_me_text,
  resume_text
}