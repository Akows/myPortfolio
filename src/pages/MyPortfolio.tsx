import React, { useState } from 'react';
import styled from 'styled-components';

interface ModalBackgroundProps {
  show: boolean;
}

const PortfolioWrapper = styled.div`
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 20px 10px;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 300px; // 원하는 높이 설정
  background: url('image.jpg') no-repeat center/cover;
  margin-bottom: 20px;
`;

const PortfolioItem = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;

  h2 {
    position: relative;
    margin-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.secondaryText};
    }
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background: url('thumbnail.jpg') center/cover no-repeat;

  &:hover:before {
    content: '넘어가기';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .tech-stack {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;

    span {
      background-color: grey;
      color: black;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
`;

const ModalBackground = styled.div<ModalBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }

  .close-btn {
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MyPortfolio: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PortfolioWrapper>
      <BannerWrapper />
      <ContentWrapper>
        <PortfolioItem>
          <Thumbnail>프로젝트 사진</Thumbnail>
          <Description>
            <h2>프로젝트 제목</h2>
            <p>2023/03/03 ~ 2023/04/04</p>
            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
            </div>
            <p>• 구현 기능 간략 1</p>
            <p>• 구현 기능 간략 2</p>
            <p>• 구현 기능 간략 3</p>
            <button onClick={() => setShowModal(true)}>상세보기</button>
          </Description>
        </PortfolioItem>
      </ContentWrapper>
      <ModalBackground show={showModal}>
        <Modal>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            X
          </button>
          <h2>프로젝트 제목</h2>
          <img src="image.jpg" alt="프로젝트 사진" />
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
          </div>
          <a href="github-link">GitHub</a>
          <a href="deployed-link">Deploy</a>
          <a href="intro-page-link">Introduce Link</a>
          <p>이런 저런 구현을 했습니다..</p>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
        </Modal>
      </ModalBackground>
    </PortfolioWrapper>
  );
};

export default MyPortfolio;
