import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        if (result.data.success) {
          alert('Login successful!');
          setEmail('');
          setPassword('');
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordReset = () => {
    axios
      .post('http://localhost:3001/reset-password', { email, newPassword })
      .then((result) => {
        if (result.data.success) {
          alert('Password updated successfully!');
          setEmail('');
          setNewPassword('');
          setIsResettingPassword(false);
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-container">
      <h2>{isResettingPassword ? 'Reset Password' : 'Login'}</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {!isResettingPassword ? (
        <>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/Home">
          <button type="button" onClick={handleLogin}>
            Login 
          </button></Link>
          <p onClick={() => setIsResettingPassword(true)}>Forgot Password?</p>
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handlePasswordReset}>
            Reset Password
          </button>
          <p onClick={() => setIsResettingPassword(false)}>Back to Login</p>
        </>
      )}
    </div>
  );
}

export default Login;
