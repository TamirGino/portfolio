import React, { useEffect, useState } from 'react';
import styles from '../../Styles/submitBtn.module.css';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import ThemeBtn from './Button';

const SubmitBtn = (props) => {
    
    const isValidForm = () => {
        if (props.email === "" ||  props.name === "" || props.message === "") {
            props.errMsg("Please fill in the all form")
          return true;
      } else if(!isValidEmail()) {
            props.errMsg("Invalid Email")
          return true;
      }else{
        return false;
      }   
      }
    
    
      const isValidEmail = () => {
        return /\S+@\S+\.\S+/.test(props.email);
      }

    const handleClick = () => {
    console.log(isValidForm(), "PARENT")
    if (isValidForm()) {
      props.handleAlert();
      return ;
    }
      console.log("CHILD")
      const sendIcon = document.getElementById('icon-send');
      const buttonText = document.getElementById('button-text');
      const iconCheck = document.getElementById('icon-check');
  
      sendIcon.style.transform = `scale(0.5) translateX(-200px)`;
      buttonText.textContent = 'Sending...';
      buttonText.classList.add('loading');
      buttonText.style.transform = `translateX(-10px)`;
      console.log("CHILD2")
      props.submit();
      // Fake loading state
      setTimeout(() => {
        buttonText.style.transform = `translateY(80px)`;
        buttonText.classList.remove('loading');
  
        sendIcon.style.transition = `1000ms ease 230ms`;
        sendIcon.style.transform = `scale(2) translateX(120px)`;
  
        sendIcon.addEventListener("webkitTransitionEnd", showSentText);
      }, 2000);
    }
  
    const showSentText = () => {
      document.getElementById("button").style.cursor = "wait";
      const iconCheck = document.getElementById('icon-check');
      const buttonText = document.getElementById('button-text');
  
      iconCheck.style.opacity = `1`;
  
      buttonText.classList.add('notransition');
      buttonText.style.transform = `translateY(-80px)`;
      buttonText.textContent = 'Sent';
    //   buttonText.offsetHeight 
      buttonText.classList.remove('notransition');
  
      iconCheck.style.transform = `translateY(0px)`;
      buttonText.style.transform = `translateY(0px)`;
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.cursor = "default";
    }
  
    return (
      <div id="container" className={styles.container} >
        <button id="button" className={styles.button} onClick={handleClick} >
          <i id="icon-send" className={`${styles.icon_send} ${styles.material_icons}`}><SendIcon/></i>
          <i id="icon-check" className={`${styles.icon_check} ${styles.material_icons}`}><CheckIcon/></i>
          <span id="button-text" className={styles.button_text}>Send</span>
        </button>
      </div>
    );
  };
  
  export default SubmitBtn;
  