import { useState, useEffect } from 'react';
import React from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [messageSent, setMessageSent] = useState('');

 
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission, e.g. send data to backend
    setMessageSent(true);
    setSubmitted(true);

  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setMessageSent(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);


  return (

    
    <form className='contactform' onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
      {messageSent && <p className='message1'>Message Sent</p>}
          <label>
            Name:
            <input type="text" value={name} onChange={event => setName(event.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={event => setEmail(event.target.value)} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={event => setMessage(event.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        
      
    </form>
  );
}

export default ContactForm;