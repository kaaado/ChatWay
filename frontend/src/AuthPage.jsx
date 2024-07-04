import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; 

const AuthPage = (props) => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    if (username.length <= 3 || secret.length <= 7) {
      setError('Username must be longer than 3 characters and password longer than 7 characters.');
      return;
    }
    setError('');
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => setError(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    if (username.length <= 3 || secret.length <= 7) {
      setError('Username must be longer than 3 characters and password longer than 7 characters.');
      return;
    }
    setError('');
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => setError(JSON.stringify(e.response.data)));
  };

  return (
    <div className="background">
      <div className="form-card">
        {isLogin ? (
          <form onSubmit={onLogin} className="form-section">
            <div className="form-title">Login</div>
            <div className="auth">
              <div className="auth-label">Username</div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="auth-input"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="auth-label">Password</div>
              <input
                type="password"
                name="secret"
                placeholder="Password"
                className="auth-input"
                onChange={(e) => setSecret(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="auth-button">LOG IN</button>
              <div className="switch-auth">
                Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={onSignup} className="form-section">
            <div className="form-title">Sign Up</div>
            <div className="auth">
              <div className="auth-label">Username</div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="auth-input"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="auth-label">Password</div>
              <input
                type="password"
                name="secret"
                placeholder="Password"
                className="auth-input"
                onChange={(e) => setSecret(e.target.value)}
              />
              <div className="auth-label">Email</div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="auth-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="auth-label">First name</div>
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="auth-input"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="auth-label">Last name</div>
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="auth-input"
                onChange={(e) => setLastName(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="auth-button">SIGN UP</button>
              <div className="switch-auth">
                Already have an account? <span onClick={() => setIsLogin(true)}>Log In</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
