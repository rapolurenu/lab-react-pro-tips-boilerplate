// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import Contacts from './components/Contacts';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
