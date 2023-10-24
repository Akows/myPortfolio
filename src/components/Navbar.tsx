import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/reducer';
import { RootState } from '../redux/store';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ToggleButtonProps = {
  currentTheme: 'white' | 'black';
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
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; // 링크 간의 간격

  a {
    color: ${props => props.theme.primaryText};

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

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <NavbarWrapper>
      <NavLinks>
        <Link to="/">이유승 포트폴리오</Link>
        <Link to="/introducemyself">소개</Link>
        <Link to="/myportfolio">포트폴리오</Link>
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
