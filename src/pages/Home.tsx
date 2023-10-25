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
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Introduction = styled.div`
  font-size: 1rem; // 기본 글자 크기
  text-align: left; // 우측 정렬
  margin-bottom: 30px;
  line-height: 1.5;
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

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledButton = styled(Link)`
  width: 550px;
  height: 400px; // 2배 높이로 변경
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
  border-radius: 15px; // 모든 모서리를 둥글게 처리
  padding-top: 20px; // 이미지와 선을 구분하기 위한 패딩 추가

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${props => props.theme.primaryText}; // 선으로 구분
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;

    & > * {
      // 모든 직접적인 자식 요소들에 투명도를 적용
      opacity: 0.1;
    }

    &::before {
      content: '더보기';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
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
          <StyledButton to="/introducemyself">
            <img src="path-to-introduction-image.jpg" alt="이력서버튼사진" />
            <span>이력서</span>
            <span>저의 이력서입니다.</span>
          </StyledButton>
          <StyledButton to="/myportfolio">
            <img src="path-to-portfolio-image.jpg" alt="포트폴리오버튼사진" />
            <span>포트폴리오</span>
            <span>저의 포트폴리오입니다.</span>
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
