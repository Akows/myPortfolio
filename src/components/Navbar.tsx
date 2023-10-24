import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  width: 100%; // 페이지 너비 전체에 해당
  height: 80px; // 예시로 높이를 60px로 설정, 필요에 따라 조절
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; // 다른 요소보다 항상 위에 있도록 z-index 설정
  background-color: #333; // 예시로 배경색 설정, 원하는 색상으로 변경 가능
  color: #fff; // 글자색 예시

  // 반응형 대응
  @media (max-width: 768px) {
    height: 50px; // 모바일 화면에서의 높이 조절 예시
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <div>Navbar</div>
    </NavbarWrapper>
  );
};

export default Navbar;
