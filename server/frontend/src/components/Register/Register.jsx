import React, { useState } from 'react';
import './Register.css';
import Header from '../Header/Header';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration form submitted!');
  };

  return (
    <div>
      <Header />
      <div className="register_container">
        <h1 className="header">Sign-up</h1>

        <form onSubmit={handleRegister}>
          <div className="inputs">
            <div className="input">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="input_field"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                className="input_field"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                className="input_field"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="input_field"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="input_field"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="submit_panel">
            <button className="submit" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
