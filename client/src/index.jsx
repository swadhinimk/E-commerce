import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Signup from './pages/Signup';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
