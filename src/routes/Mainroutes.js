import React from 'react';
import Home from '../screens/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom/dist'
import SwapScreen from '../screens/SwapScreen';
import NeedMetaMask from '../screens/NeedMetaMask';
import Cards from '../screens/Cards';
import HowToStart from '../screens/HowToStart';
const Mainroutes = () => {
  return (
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<SwapScreen />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/metamask" element={<NeedMetaMask />} />
        <Route path="/howToStart" element={<HowToStart />} />
      </Routes>
    
  );
};

export default Mainroutes;
