import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%; // 페이지 너비 전체에 해당
  height: 50px; // Footer의 높이 설정
  position: fixed; // Footer를 화면 하단에 고정
  bottom: 0; // 화면 하단에 위치시킴
  left: 0;

  background-color: #333; // 배경색 설정
  color: #fff; // 글자색 설정
  text-align: center; // 텍스트를 중앙에 위치시킴
  line-height: 50px; // 글자를 vertically center에 위치시킴

  // 반응형 대응
  @media (max-width: 768px) {
    height: 40px;
    line-height: 40px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div>Footer</div>
    </FooterWrapper>
  );
};

export default Footer;
