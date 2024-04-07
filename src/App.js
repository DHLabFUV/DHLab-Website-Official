import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; //stylesheet
import Footer from './UI/footer/footer';

const App = () => {
  return (
    <><div>
      <p>Content</p>
      <Footer/>
    </div><BrowserRouter>
        <Routes>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter></>
  );
};

export default App;