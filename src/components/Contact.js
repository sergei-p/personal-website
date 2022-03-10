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
        <div>
          <label>Name</label>
        </div>
        <input class="input" type="text" name="from_name" />
        <div>
          <label>Email</label>
        </div>
        <input class="input" type="text" name="from_email" />
        <div>
          <label>Subject</label>
        </div>
          <input class="input" type="text" name="subject" />
        <div>
          <label>Message</label>
        </div>
        <textarea class="input"  name="message"></textarea>
        <div>
          <button class="btn" type="submit">Send</button>
        </div>
        </form>
      </div> 
    </section>
  )
}

export default Contact;