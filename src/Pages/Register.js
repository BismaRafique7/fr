import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Headar';
import Footer from '../Components/Footer';
import './Auth.css';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const handleAdd = () => {
    if (password === confirmPassword) {
      axios
        .post('http://localhost:3002/add', { email: email, password: password })
        .then((result) => {
          console.log('User added:', result.data);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        })
        .catch((err) => console.log(err));
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div>
      <Header/>
      <div className="auth-container">
  <h2>Register</h2>
  <input
    type="email"
    placeholder="Enter email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <input
    type="password"
    placeholder="Confirm password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  <button type="button" onClick={handleAdd}>
    Register
  </button>
</div>
    <Footer/>
    </div>
  );
}

export default Register;
