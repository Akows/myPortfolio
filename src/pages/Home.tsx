import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 100%; // 페이지 너비 전체에 해당
  min-height: calc(
    100vh - 80px
  ); // 전체 높이에서 Navbar 높이만큼 제외. 필요에 따라 Footer 높이도 제외

  padding-top: 80px; // Navbar의 높이만큼 패딩 추가

  background-color: #fff;
  color: #333;

  // 반응형 대응: 예를 들어, 모바일에서 Navbar 높이가 50px로 변경된다고 가정
  /* @media (max-width: 768px) {
    padding-top: 50px;
  } */
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <div>Home</div>
    </HomeWrapper>
  );
};

export default Home;
