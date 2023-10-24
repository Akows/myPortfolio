import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import IntroduceMyself from '../pages/IntroduceMyself';
import MyPortfolio from '../pages/MyPortfolio';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introducemyself" element={<IntroduceMyself />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
