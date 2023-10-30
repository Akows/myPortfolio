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
    width: 90%;
    padding: 20px 15px;
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

  span.emphasized {
    color: ${props => props.theme.emphasisColor};
  }
`;

const LargeText = styled.p`
  font-size: 2rem; // 큰 글자 크기
  margin: 10px 0; // 상하 마진 추가

  span.emphasized {
    color: ${props => props.theme.emphasisColor};
  }
`;

const BorderedBox = styled.div`
  border: 1px solid ${props => props.theme.primaryText}; // 테두리 적용
  padding: 10px;
  margin-top: 20px;

  span.emphasized {
    color: ${props => props.theme.emphasisColor};
  }
`;

const AboutMe = styled.h2`
  text-align: left;
  margin: 30px 0 10px; // spacing을 주어 Introduction과 ButtonWrapper 사이에 위치하게 함
  font-size: 18px; // 글자 크기 조절
`;

const HorizontalLine = styled.hr`
  width: 100%; // 가로 크기
  border: 0.5px solid ${props => props.theme.primaryText};
  margin-bottom: 30px; // ButtonWrapper와의 간격 설정
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

  // StyledButton 내부의 span 태그 스타일링
  span {
    width: 100%;
    text-align: center;
    background-color: ${props =>
      props.theme.secondaryBackground}; // 테마에 따른 배경색 적용
    color: ${props => props.theme.primaryText};
    position: absolute;
    bottom: 0;
    padding: 10px 0;
    z-index: 2;

    font-weight: 800;

    // 아래와 같이 투명도를 조금 주면 배경이미지와 조화롭게 표시될 수 있습니다.
    opacity: 0.9;
  }

  span:first-child {
    font-size: 1.5rem;
    margin-bottom: 45px; // 첫 번째 span 태그의 하단 마진 적용
  }

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.6); */
    color: ${props => props.theme.primaryText};

    font-weight: 900;

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
          Hello! I'm <span className="emphasized">Yuseung Lee</span>, a
          front-end developer.
          <LargeText>
            안녕하세요! 프론트엔드 개발자,
            <span className="emphasized"> 이유승</span>입니다.
          </LargeText>
          <BorderedBox>
            <p>저는..</p>
            <p>
              🤔 현재에 안주하지 않고
              <span className="emphasized">
                _함께 성장하기 위해 끊임없이 공부_
              </span>
              합니다.
            </p>
            <p>
              <span className="emphasized">
                💻 상대방의 니즈에 공감하는 개발자_
              </span>
              가 되기 위해 소프트 스킬을 키워나갑니다.
            </p>
            <p>
              📝 습득한
              <span className="emphasized">
                _지식을 기록하고 공유하는 개발자_
              </span>
              가 되기를 지향합니다.
            </p>
          </BorderedBox>
        </Introduction>
        <AboutMe>❖ About Me</AboutMe>
        <HorizontalLine />
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
