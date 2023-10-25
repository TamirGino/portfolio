import  React, { useState } from 'react';
import { Alert, Snackbar, Avatar, TextField, Box, Container } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {  collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import SubmitBtn from './SubmitButton';

export default function Form() {
  
  const [email,setEmail] = useState("")
  const [message,setPassword] = useState("")
  const [name,setName] = useState("")
  const [openSnack, setOpenSnack] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [avatarOpacity, setAvatarOpacity] = useState(1); 

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
      <Container sx={{
        borderLeft:"4px double #CDA716",
        borderRight:"4px double #CDA716",
        backgroundColor: 'transparant',
        boxShadow: 'rgba(150, 150, 150, 0.9) 0px 5px 15px',
        borderRadius:'10px',
        display: 'flex',
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
          <Box sx={{ mt: 0, display:'flex', 
           gap:'20px', justifyContent:'center', flexWrap:'wrap', }}>
          <TextField
              onChange={onNameChange}
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
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
            <div >
              <SubmitBtn name={name} email={email} message={message}
              handleAlert={handleAlert} errMsg={handleError} submit={handleSubmit}/>
            </div>
            
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseAlert}
            anchorOrigin={{
              vertical: 'top', 
              horizontal: 'center', 
            }} >
                <Alert severity="error" sx={{ width: '100%', justifyContent: 'center' }}>
                    {errorMsg}
                 </Alert>
              </Snackbar>
          </Box>
        </Box>
      </Container>
  );
}