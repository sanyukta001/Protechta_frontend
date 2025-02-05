// import logo from './logo.svg';
import './App.css';
// import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import react from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
// import { components } from 'react';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
          <Link to="/">Login</Link>
          </li>
          <li>
          <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact="true" path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </div>
      <div className='centered-div'>
        <h1>Stay Protected Online : Detect</h1>
        <p>Our Advanced AI- Powwered Solution Identifies malicious websites. safeguarding, your data and privacy.</p>
        <div className='detect'>
          <input className='url-holder' type="text" placeholder="Enter a URL" />
          <button className='detectButton'>Detect</button>
        </div>
      </div>
      </Router>
  );
}

export default App;
