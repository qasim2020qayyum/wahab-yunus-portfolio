import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './contacts.css'
import {
  ContactInfo,
  ImageWrapper,
  DetailsWrapper,
  StyledContactSection,
  StyledContactForm,
} from "./ContactSection.styled"

const Contacts = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_clecths', 
      'template_qi4ak0d', 
      form.current, 
      'ejU48XerHugE5qS5B'
      )
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        toast.success("Message sent 👌");
      }, (error) => {
        console.log(error.text);
        toast.error("Failed! Message not sent 😒 Email me directly instead");
      });
  };

  return (
    <>
        <div className='contactbg'>
   
     <StyledContactSection id="contact">
      
        {/* <SectionHeading>
          <h1>Contact</h1>
          <p>Get in touch</p>
        </SectionHeading> */}
         <main id='portfolio' className='portfolio-wrapper py-5'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Contact</h1> </div></main>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I’ll get back to you
              ASAP!
            </p>
              <a className='adeco' href="sales@eraflip.com">
               My Email: <span>sales@eraflip.com</span>
              </a>
            {/* <div>
            </div> */}
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail} autoComplete="off">
                <h3>Write me a Message 👇</h3>
                <label>Your Name</label>
                <input type="text" name="user_name" required />
                <label>Your Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/chat.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
    
    {/* 

   <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea rows={5} name="message" required/>
      <input type="submit" value="Send" />
    </form> */}
    </div>
      
    </>
  )
}

export default Contacts
