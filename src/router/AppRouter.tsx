import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { ThemeProvider } from 'styled-components';

import Home from '../pages/Home';
import IntroduceMyself from '../pages/IntroduceMyself';
import MyPortfolio from '../pages/MyPortfolio';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const themes = {
  white: {
    primaryBackground: '#fff',
    primaryText: '#333',
    secondaryText: '#aaa',
    toggleBackground: '#aaa',
    toggleCircle: '#333',
    togglebuttoncolor: '#fff',
    hoverBackground: 'rgba(255, 255, 255, 0.3)', // hover 시의 배경색
  },
  black: {
    primaryBackground: '#333',
    primaryText: '#fff',
    secondaryText: '#ddd',
    toggleBackground: '#aaa',
    toggleCircle: '#fff',
    togglebuttoncolor: '#333',
    hoverBackground: 'rgba(0, 0, 0, 0.6)', // hover 시의 배경색
  },
};

const AppRouter: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[currentTheme]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introducemyself" element={<IntroduceMyself />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
