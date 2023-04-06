import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    if (username === 'Flamur' && password === 'Flamur') {
      console.log('Login successful!'); // or redirect user to authenticated page
      window.location.href = '#/courses'; // redirect to dashboard page
    } else {
      alert('Username or password incorrect! Please try again.');
    }
  };

  return (
    <div>
      <form className='loginpage' onSubmit={handleSubmit}>
        <h2><i className="icon-user"></i> Login</h2>
        <input type="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;