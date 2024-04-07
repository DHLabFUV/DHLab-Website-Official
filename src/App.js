import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; //stylesheet
import Footer from './UI/footer/footer';
import Navbar from './UI/navbar/navbar';

const App = () => {
  return (
    <><Navbar /><Footer /><BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter><Footer /></>

  );
};

export default App;