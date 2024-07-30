import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; //stylesheet
import Navbar from './frontend/navbar/navbar';
import WhoAreWe from './frontend/whoarewe/whoarewe';
import Archives from './frontend/archives/archives';
import HomePage from './frontend/homepage/homepage';
import Footer from './frontend/footer/footer';

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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;