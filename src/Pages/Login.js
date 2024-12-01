import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './Auth.css'; 
import Header from '../Components/Headar';
import Footer from '../Components/Footer';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);

 
  const handleLogin = () => {
    axios
      .post('http://localhost:3002/login', { email, password })
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

  // Function to handle password reset
  const handlePasswordReset = () => {
    axios
      .post('http://localhost:3002/reset-password', { email, newPassword })
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
    <div>
    <Header />
    <div className="auth-container"> 
      <h2>{isResettingPassword ? 'Reset Password' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isResettingPassword ? (
        <>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p onClick={() => setIsResettingPassword(true)}>Forgot Password?</p>
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </>
      ) : (
        <>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="button" onClick={handlePasswordReset}>
            Reset Password
          </button>
          <p onClick={() => setIsResettingPassword(false)}>Back to Login</p>
        </>
      )}
    </div>
    <Footer />
  </div>
  );
}

export default Login;
