import React,{useState,useRef} from 'react';
import './contact.scss';

import emailjs from '@emailjs/browser';


export default function Contact() {
   
  const[message,setMessage]=useState(false);

  const handleSubmit=(e)=>{
       
      setMessage(true);
  }

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3yr2a3i', 'template_2w9dw3f', form.current, 'MvBsJagrlXL-FVTMN')
        .then((result) => {
            console.log(result.text);
            if(result.text === "OK"){
              handleSubmit();
            }
        }, (error) => {
            console.log(error.text);
        });
      }
    


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt=""/>
      </div>
      <div className="right">

      <div className="form-style-6">
      <h2>Contact.</h2>
<div className="size">
<form ref={form} onSubmit={sendEmail}>
    <label>Nume</label>
    <input type="text" name="user_name" />
    <label>Email</label>
     <input type="email" name="user_email" />
     <label>Mesaj</label>
     <textarea name="message" />
     <input type="submit" value="Trimite"/>

     
</form>
</div>


{message && <span>Multumim,mesajul dumneavoastra a fost trimis!</span>}
</div>
    </div>

    </div>
  )
  
}