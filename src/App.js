import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
        <h2 style={{ margin: '0', textAlign: 'center' }}>Welcome to Protechta</h2>
        <div style={{ width: '100px' }}></div> {/* Spacer for balance */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDetect = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/detect', { url });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Detection failed');
    }
  };


  return (
    <div className='centered-div'>
      <h1>Stay Protected Online: Detect</h1>
      <p>Our Advanced AI-Powered Solution Identifies malicious websites, safeguarding your data and privacy.</p>
      <div className='detect'>
        <input 
          className='url-holder' 
          type="text" 
          placeholder="Enter a URL" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className='detectButton' onClick={handleDetect}>Detect</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      });
      setMessage('Signup successful!');
      console.log(response.data); // JWT token
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className='signup-div'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setMessage('Login successful! Redirecting to home...');
      console.log(response.data); // JWT token
      setTimeout(() => navigate('/'), 2000); // Redirect to home after 2 seconds
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='login-div'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <nav>
//         <ul>
//           <li>
//           <Link to="/">Login</Link>
//           </li>
//           <li>
//           <Link to="/signup">Sign Up</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route exact="true" path="/" element={<Login />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//       </Routes>
//       </div>
//       <div className='centered-div'>
//         <h1>Stay Protected Online : Detect</h1>
//         <p>Our Advanced AI- Powwered Solution Identifies malicious websites. safeguarding, your data and privacy.</p>
//         <div className='detect'>
//           <input className='url-holder' type="text" placeholder="Enter a URL" />
//           <button className='detectButton'>Detect</button>
//         </div>
//       </div>
//       </Router>
//   );
// }

// export default App;

// src/App.js
