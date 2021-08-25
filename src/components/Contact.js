import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    alert("Email Sent")

    emailjs.sendForm('gmail1', 'template1', e.target, 'user_JKNffil5RARSiv5cwuX6U')
      .then((result) => {
        window.location.reload();
      }, (error) => {
        console.log(error);
      });
  }

  return( 
    <section id="contact">
      <div className="contactTitle">
        <h2>Contact Me</h2>
          <hr/>
      </div>
      <div className="formContainer">
        <form className="contactForm" onSubmit={sendEmail}> 
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  )
}

export default Contact;