import React from 'react';
import emailjs from 'emailjs-com';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
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
       {/* <div className="contactTitle">
        <h2>Contact Me</h2>
          <hr/>
      </div> */}

      {/* <Form>
        <Form.Group className="mb-2" controlId="from_name">
          <Form.Label>Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter Name"/>
        </Form.Group>
  
        <Form.Group className="mb-2" controlId="from_email">
          <Form.Label>Email</Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter Subject" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control size="sm" as="textarea" rows={3} placeholder="Enter Message"/>
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form> */}


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