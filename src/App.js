import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; //stylesheet
import Footer from './UI/footer/footer';
import Homescreen from './UI/homescreen/homescreen';
const App = () => {
  return (
    <><div>
      {/* <Footer/> */}
      <Homescreen/>
    </div><BrowserRouter>
        <Routes>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter></>
  );
};

export default App;