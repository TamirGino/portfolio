import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, Snackbar,MuiAlert } from '@mui/material';
import ThemeBtn from './Button';
import { and, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import SubmitBtn from './SubmitButton';





// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


export default function Form(props) {

  
  const [email,setEmail] = useState("")
  const [message,setPassword] = useState("")
  const [name,setName] = useState("")
  const [openSnack, setOpenSnack] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [avatarOpacity, setAvatarOpacity] = useState(1);

  // const [openAlert, setOpenAlert] = useState(false);

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpenAlert(false);
  // };
  

  const handleCloseAlert = () => {
    setOpenSnack(false);
  };

  const handleSubmit = async () => {
    setAvatarOpacity(0.3);
      try {
        const messagesRef  = collection(db, 'messages');
        const snapshot = await getDocs(messagesRef );
        let maxId = 0;
  
        snapshot.forEach((doc) => {
          const docId = parseInt(doc.id);
          if (docId > maxId) {
            maxId = docId;
          }
        });
        const newMessageId = maxId + 1;
        // insert submition date and time 
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
  
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`; 
  
        // Add the new message to Firestore
        const newDocRef = doc(messagesRef, String(newMessageId));
        await setDoc(newDocRef, { id: newMessageId, email: email, name: name, message:message,
           submission_date: formattedDate, submission_time: formattedTime, } );
           console.log("message sent successfully");
           setTimeout(() => {
            setAvatarOpacity(1);
          }, 2000);
           
      } catch (err) {
        console.log(err);
      
    }
     
    
  };
  
  const handleError = (errMsg) =>{
    setErrorMsg(errMsg)
  }

  const handleAlert = () => {
    setOpenSnack(true)
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onMessageChange = (event) => {
    setPassword(event.target.value)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  return (

    // <ThemeProvider theme={defaultTheme}>
    // <Card additionalStyle={additionalBoxStyle}>
      <Container sx={{
        borderLeft:"4px double #CDA716",
        borderRight:"4px double #CDA716",
        backgroundColor: 'transparant',
        boxShadow: 'rgba(150, 150, 150, 0.9) 0px 5px 15px',
        borderRadius:'10px',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',

      }} component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
          }}
        >
        
          <Avatar sx={{ m: 2, bgcolor: '#CDA716', opacity: avatarOpacity }}>
            <EmailOutlinedIcon />
          </Avatar>
          {/* <Typography sx={{color:"white"}} component="h1" variant="h5">
            Register
          </Typography> */}
          <Box sx={{ mt: 0, display:'flex', 
           gap:'20px', justifyContent:'center', flexWrap:'wrap', }}>
          <TextField
              onChange={onNameChange}
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{
                backgroundColor: 'white', borderRadius:'5px',
              }}
            />
            <TextField
              onChange={onEmailChange}
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{
                backgroundColor: 'white', borderRadius:'5px',
              }}
            />
            {/* {error && <h5 style={{color: 'red'}}>{error}</h5>} */}
            <TextField
              minRows={3}
              onChange={onMessageChange}
              variant="filled"
              margin="normal"
              required
              fullWidth
              multiline
              name="message"
              label="Message"
              type="text"
              id="outlined-multiline-flexible"
              maxRows={4}
              sx={{
                backgroundColor: 'white', borderRadius:'5px'
              }}
            />

            {/* <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, alignSelf:'center' }}
              onClick={handleSubmit}
            >
              Register
            </Button> */}
            <div >
              {/* <ThemeBtn sx={{marginBottom:2, }} text={"CONTACT ME"}  /> */}
              <SubmitBtn name={name} email={email} message={message}
              handleAlert={handleAlert} errMsg={handleError} submit={handleSubmit}/>
            </div>
            
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseAlert} >
                <Alert severity="error" sx={{ width: '100%', justifyContent: 'center' }}>
                    {errorMsg}
                 </Alert>
              </Snackbar>
            
          </Box>
          
        </Box>
         {/* {openAlert && <MuiAlert message={"Email or Password does'nt exist. Please try again."}/>}      */}
        {/* <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} 
        anchorOrigin={{
        vertical: 'top', 
        horizontal: 'center', 
      }}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
          Email or Password does'nt exist. Please try again. 
        </Alert>
      </Snackbar> */}
        
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
  );
}