import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
    secondaryBackground: 'rgba(255, 255, 255, 0.8)', // span 태그의 배경색
    hoverBackground: 'rgba(255, 255, 255, 0.3)', // hover 시의 배경색
    emphasisColor: '#DAA520', // Soft Gold
  },
  black: {
    primaryBackground: '#333',
    primaryText: '#fff',
    secondaryText: '#ddd',
    toggleBackground: '#aaa',
    toggleCircle: '#fff',
    togglebuttoncolor: '#333',
    secondaryBackground: 'rgba(0, 0, 0, 0.8)', // span 태그의 배경색
    hoverBackground: 'rgba(0, 0, 0, 0.6)', // hover 시의 배경색
    emphasisColor: '#001F3F', // Deep Navy
  },
};

// 페이지 렌더링 시 스크롤 위치를 페이지 최상단으로 이동시키는 역할의 컴포넌트.
// useLocation 훅이 <Router> 컴포넌트의 컨텍스트 내에서만 사용되어야하기에 별도의 컴포넌트를 생성하여 기능을 처리한다.
const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // 의존성 배열에 location.pathname을 넣어 라우트가 변경될 때마다 이 효과를 실행합니다.

  // 이 컴포넌트는 JSX 컴포넌트지만 렌더링할 요소가 없다.
  return null; // 아무것도 렌더링하지 않는 컴포넌트
};

const AppRouter: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <BrowserRouter>
      <ScrollToTop />
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
