import React, { useState } from 'react';

function ContactForm() {
  const API = "http://localhost:3000";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Use fetch() or Axios to send form data to server
    const data = {
      name: name,
      email: email,
      message: message
    }
    await fetch(`${API}/cars`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    setMessageSent(true);
  }


  return (
    <>
      <form className='contactform' onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
      {messageSent && <p>Message Sent</p>}
        <label type="name" >Name</label>
        <input type="text" id="name" name="name" placeholder='Your Name' value={name} onChange={handleNameChange} required />

        <label type="email" >Email</label>
        <input type="email" id="email" name="email" placeholder='Your Email' value={email} onChange={handleEmailChange} required />

        <label type="message">Message</label>
        <textarea id="message" name="message" placeholder='Your Message' value={message} onChange={handleMessageChange} required></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;