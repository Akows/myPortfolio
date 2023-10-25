import React, { useState } from 'react';
import styled from 'styled-components';

interface ModalBackgroundProps {
  show: boolean;
}

interface Project {
  id: number;
  title: string;
  date: string;
  techs: string[];
  features: string[];
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
  margin-bottom: 130px;
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

  & > button {
    height: 50px;
    border-radius: 15px;
    font-family: 'DNFBitBitv2', sans-serif;
    background-color: ${props => props.theme.primaryBackground};
    color: ${props => props.theme.primaryText};
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
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};
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
  color: ${props => props.theme.primaryText};
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  position: relative; // 상대 위치로 변경
  margin-top: 20px; // 모달의 아래 영역에 위치시키기 위해 마진 추가
`;

const MyPortfolio: React.FC = () => {
  // 몇번 모달창을 출력할 것인지 제어하는 state.
  const [showModal, setShowModal] = useState<number | null>(null);

  const projectList: Project[] = [
    {
      id: 1,
      title: '프로젝트 제목 1',
      date: '2023/03/01 ~ 2023/04/01',
      techs: ['React', 'JavaScript'],
      features: ['구현 기능 1-1', '구현 기능 1-2', '구현 기능 1-3'],
    },
    {
      id: 2,
      title: '프로젝트 제목 2',
      date: '2023/04/02 ~ 2023/05/02',
      techs: ['React', 'TypeScript'],
      features: ['구현 기능 2-1', '구현 기능 2-2'],
    },
    {
      id: 3,
      title: '프로젝트 제목 3',
      date: '2023/04/02 ~ 2023/05/02',
      techs: ['React'],
      features: ['구현 기능 3-1'],
    },
    // ... 여기에 추가 프로젝트 정보를 계속 입력.
  ];

  return (
    <PortfolioWrapper>
      <BannerWrapper />
      <ContentWrapper>
        {/* 프로젝트 설명 UI */}
        {projectList.map((project, idx) => (
          <PortfolioItem key={idx}>
            <Thumbnail>프로젝트 사진</Thumbnail>
            <Description>
              <h2>{project.title}</h2>
              <p>{project.date}</p>
              <div className="tech-stack">
                {project.techs.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.features.map(feature => (
                <p key={feature}>• {feature}</p>
              ))}
              <button onClick={() => setShowModal(idx)}>상세보기</button>
            </Description>
          </PortfolioItem>
        ))}
      </ContentWrapper>

      {/* 프로젝트 설명 모달창 UI */}
      {projectList.map((project, idx) => (
        <ModalBackground key={idx} show={showModal === idx}>
          <Modal>
            <h2>{project.title}</h2>
            <img src="image.jpg" alt="프로젝트 사진" />
            <div className="tech-stack">
              {project.techs.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href="github-link">GitHub</a>
            <a href="deployed-link">Deploy</a>
            <a href="intro-page-link">Introduce Link</a>
            <p>이런 저런 구현을 했습니다..</p>
            <CloseButton onClick={() => setShowModal(null)}>닫기</CloseButton>
          </Modal>
        </ModalBackground>
      ))}
    </PortfolioWrapper>
  );
};

export default MyPortfolio;
