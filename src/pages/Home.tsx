import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-image: url('path-to-your-banner-image.jpg'); // 여기에 배너 이미지 경로를 넣어주세요.
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Introduction = styled.div`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.5;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledButton = styled(Link)`
  width: 550px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondaryText};
  transition:
    background-color 0.3s,
    color 0.3s;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.primaryText};
  overflow: hidden;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;

    &::before {
      content: '더보기';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      z-index: 1;
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
          안녕하세요! 이유승의 포트폴리오에 오신 것을 환영합니다.
        </Introduction>
        <ButtonWrapper>
          <StyledButton to="/introducemyself">
            <img src="path-to-introduction-image.jpg" alt="소개" />
            <span>저의 이력서</span>
          </StyledButton>
          <StyledButton to="/myportfolio">
            <img src="path-to-portfolio-image.jpg" alt="포트폴리오" />
            <span>제가 만든 프로젝트</span>
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
