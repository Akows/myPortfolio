import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/reducer';
import { RootState } from '../redux/store';
import styled, { useTheme } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

type ToggleButtonProps = {
  currentTheme: 'white' | 'black';
};

type DropdownProps = {
  isOpen: boolean;
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between; // 좌우로 최대한 떨어트리기 위한 설정
  align-items: center; // 세로 정렬
  padding: 0 20px; // 좌우 패딩
  width: 100%; // 페이지 너비 전체에 해당
  height: 80px; // 예시로 높이를 60px로 설정, 필요에 따라 조절
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; // 다른 요소보다 항상 위에 있도록 z-index 설정
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};

  box-sizing: border-box;

  // 반응형 대응
  @media (max-width: 768px) {
    height: 50px; // 모바일 화면에서의 높이 조절 예시

    .desktopNav {
      display: none;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; // 링크 간의 간격

  a {
    color: ${props => props.theme.primaryText};
    font-size: 18px; // 폰트 크기 조절
    font-weight: bold; // 굵기 조절

    &:hover {
      color: ${props => props.theme.secondaryText};
    }
  }
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.toggleBackground};
  cursor: pointer;
  overflow: hidden;

  div {
    position: absolute;
    top: 5px;
    left: ${props => (props.currentTheme === 'white' ? '5px' : '35px')};
    transition: left 0.3s ease;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.togglebuttoncolor};
  }
`;

const HamburgerMenu = styled.div`
  display: none; // 기본적으로 숨김
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.primaryText};
  }

  @media (max-width: 768px) {
    display: flex; // 모바일에서만 표시
  }
`;

const DropdownMenu = styled.div<DropdownProps>`
  position: absolute;
  top: 100%; // HamburgerMenu 바로 아래 위치
  left: 0; // 왼쪽 정렬
  background-color: ${props => props.theme.primaryBackground};
  border: 1px solid ${props => props.theme.primaryText};
  z-index: 999;

  // 애니메이션 추가
  transform: ${props =>
    props.isOpen
      ? 'translateY(0)'
      : 'translateY(-10px)'}; // 위에서 아래로 페이드되면서 나타남
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease; // 위치와 투명도 두 가지 효과에 애니메이션 적용

  a {
    display: block;
    padding: 10px 15px;
    color: ${props => props.theme.primaryText};
    font-size: 18px; // 폰트 크기 조절
    font-weight: bold; // 굵기 조절

    &:hover {
      background-color: ${props => props.theme.secondaryBackground};
    }
  }
`;

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // 현재 경로를 가져오는 훅
  const location = useLocation();

  // 현재 테마를 가져옴
  const theme = useTheme();

  return (
    <NavbarWrapper>
      <HamburgerMenu onClick={() => setDropdownOpen(!isDropdownOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      {isDropdownOpen && (
        <DropdownMenu isOpen={isDropdownOpen}>
          <Link to="/" onClick={() => setDropdownOpen(false)}>
            홈
          </Link>
          <Link to="/introducemyself" onClick={() => setDropdownOpen(false)}>
            자기소개
          </Link>
          <Link to="/myportfolio" onClick={() => setDropdownOpen(false)}>
            포트폴리오
          </Link>
          <a
            href="https://myblog-350b6.web.app/main"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
          >
            개발 블로그
          </a>
          <a
            href="https://github.com/Akows"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
          >
            Github
          </a>
        </DropdownMenu>
      )}
      <NavLinks className="desktopNav">
        <Link
          to="/"
          style={{
            color: location.pathname === '/' ? theme.emphasisColor : undefined,
          }}
        >
          홈
        </Link>
        <Link
          to="/introducemyself"
          style={{
            color:
              location.pathname === '/introducemyself'
                ? theme.emphasisColor
                : undefined,
          }}
        >
          자기소개
        </Link>
        <Link
          to="/myportfolio"
          style={{
            color:
              location.pathname === '/myportfolio'
                ? theme.emphasisColor
                : undefined,
          }}
        >
          포트폴리오
        </Link>
        <a
          href="https://velog.io/@skyoffly"
          target="_blank"
          rel="noopener noreferrer"
        >
          개발 블로그
        </a>
        <a
          href="https://github.com/Akows"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </NavLinks>

      <ToggleButton
        onClick={() => dispatch(toggleTheme())}
        currentTheme={currentTheme}
      >
        <div></div>
      </ToggleButton>
    </NavbarWrapper>
  );
};

export default Navbar;
