import React from 'react';
import Home from '../screens/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom/dist'
import SwapScreen from '../screens/SwapScreen';
const Mainroutes = () => {
  return (
    <BrowserRouter>
      {' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<SwapScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainroutes;
