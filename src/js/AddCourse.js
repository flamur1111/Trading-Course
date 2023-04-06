import React, { useState } from 'react';

function AddCourse() {
  const API = "http://localhost:3000";
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleEmailChange = (event) => {
    setText(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Use fetch() or Axios to send form data to server
    const data = {
      img: name,
      price: price,
      title: text,
      description: message
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
      window.location.href = '/';
      }


  return (
    <>
      <form className='addcourse' onSubmit={handleSubmit}>
        <h1>Add Courses</h1>
      {messageSent && <p>Message Sent</p>}
        <label type="name" >Image</label>
        <input type="text" id="name" name="name"  value={name} onChange={handleNameChange} required />

        <label type="email" >Type</label>
        <input type="text" id="text" name="text"  value={text} onChange={handleEmailChange} required />

        <label type="number" >Price</label>
        <input type="text" id="number" name="number"  value={price} onChange={handlePriceChange} required />

        <label type="message">Description</label>
        <textarea id="message" name="message"  value={message} onChange={handleMessageChange} required></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddCourse;