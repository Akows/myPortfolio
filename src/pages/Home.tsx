import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import backImg from '../images/pexels-fwstudio-164005.jpg';
import MyImg from '../images/upimage.jpg';
import PortImg from '../images/pexels-ann-h-14936128.jpg';

interface StyledButtonProps {
  backImage?: string;
}

const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 아래에서 위로 투명한 상태에서 뚜렷해지는 애니메이션
const fadeFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding-top: 80px;
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 20px 10px;
  }
`;

const Banner = styled.div`
  height: 300px;
  background-color: #e9ecef;
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Introduction = styled.div`
  font-size: 1rem; // 기본 글자 크기
  text-align: left; // 우측 정렬
  margin-bottom: 30px;
  line-height: 1.5;

  animation: ${fadeFromLeft} 2s forwards; // 좌측에서 우측으로 투명한 상태에서 뚜렷해지는 애니메이션 적용
`;

const LargeText = styled.p`
  font-size: 2rem; // 큰 글자 크기
  margin: 10px 0; // 상하 마진 추가
`;

const BorderedBox = styled.div`
  border: 1px solid ${props => props.theme.primaryText}; // 테두리 적용
  padding: 10px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-bottom: 120px;

  animation: ${fadeFromBottom} 2s forwards; // 아래에서 위로 투명한 상태에서 뚜렷해지는 애니메이션 적용

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledButton = styled(Link)<StyledButtonProps>`
  width: 550px;
  height: 400px; // 2배 높이로 변경
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.secondaryText};
  transition:
    background-color 0.3s,
    color 0.3s;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.primaryText};
  overflow: hidden;
  border-radius: 15px; // 모든 모서리를 둥글게 처리
  padding-top: 20px; // 이미지와 선을 구분하기 위한 패딩 추가

  background-image: url(${props => props.backImage});
  background-size: cover; // 이미지를 커버 모드로 설정
  background-position: center; // 이미지를 중앙에 배치
  background-repeat: no-repeat; // 이미지 반복 방지

  span {
    width: 100%; // 너비를 100%로 지정하여 부모 컴포넌트의 너비와 동일하게 설정
    text-align: center; // 텍스트 중앙 정렬
    background-color: ${props =>
      props.theme.secondaryBackground}; // 테마 변경과 연동되는 배경색 적용
    color: ${props => props.theme.primaryText};
    position: absolute; // span의 위치를 절대 위치로 지정
    bottom: 0; // span을 부모 컴포넌트의 하단에 배치
    padding: 10px 0; // 상하 패딩 적용
    z-index: 2; // z-index를 통해 배경 이미지 위에 배경색이 표시되도록 설정
  }

  span:first-child {
    font-size: 1.5rem;
    margin-bottom: 20px; // 첫 번째 span 태그의 하단 마진 적용
  }

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.6); */
    color: ${props => props.theme.primaryText};

    background-image: linear-gradient(
        ${props => props.theme.hoverBackground},
        ${props => props.theme.hoverBackground}
      ),
      url(${props => props.backImage});
    & > * {
      // 모든 직접적인 자식 요소들에 투명도를 적용
      opacity: 0.1;
    }

    span {
      color: #fff; // hover 상태에서의 span 태그의 텍스트 색상 변경
    }

    &::before {
      content: '더보기';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      z-index: 1;
      opacity: 1; // 더보기 글자에 대해 투명도를 적용하지 않음
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <Banner />
        <Introduction>
          나는 어떤 개발자..
          <LargeText>나는 이런 개발자..</LargeText>
          <BorderedBox>
            <p>나는</p>
            <p>나는나는</p>
            <p>나는나는나는</p>
            <p>나는나는나는나는</p>
          </BorderedBox>
        </Introduction>
        <ButtonWrapper>
          <StyledButton to="/introducemyself" backImage={MyImg}>
            <span>이력서</span>
            <span>저의 이력서입니다.</span>
          </StyledButton>
          <StyledButton to="/myportfolio" backImage={PortImg}>
            <span>포트폴리오</span>
            <span>저의 포트폴리오입니다.</span>
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
