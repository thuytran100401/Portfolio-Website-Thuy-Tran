import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_cfjkwcj', 'template_iwbecni', form.current, 'XnqiJLioYXGezcCdC')
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Error:', error);
        alert(`Failed to send the message: ${error.text || 'Unknown error'}`);
      });
  };
  

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name"><strong>Name:</strong></label>
          <input type="text" name="username" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email"><strong>Email:</strong></label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject"><strong>Subject:</strong></label>
          <input type="text" name="subject" id="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message"><strong>Message:</strong></label>
          <textarea name="message" id="message" required />
        </div>
        <button className="button" type="submit"><strong>Send Email</strong></button>
      </form>
    </div>
  );
};

export default Contact;

