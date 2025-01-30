import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './Auth.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAdd = () => {
    if (password === confirmPassword) {
      axios
        .post('http://localhost:3001/add', { email: email, password: password })
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
    <div className="auth-container">
      <h2>Register</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleAdd}>
        Register
      </button>
      <p>
            Already Register? <Link to="/login">login</Link>
          </p>
    </div>
  );
}

export default Register;
