import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; //stylesheet
import Navbar from './frontend/navbar/navbar';
import WhoAreWe from './frontend/whoarewe/whoarewe';
import Archives from './frontend/archives/archives';
import HomePage from './frontend/homepage/homepage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/archives" element={<Archives />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;