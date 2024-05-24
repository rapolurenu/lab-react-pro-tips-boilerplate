// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Contacts from './components/Contacts';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
};

export default App;