import React, { useState } from 'react';
import styled from 'styled-components';

import PortImg from '../images/pexels-ann-h-14936128.jpg';

import PrjImg1 from '../images/project/image.png';
import PrjImg2 from '../images/project/image (2).png';
import PrjImg3 from '../images/project/image (3).png';
import PrjImg4 from '../images/project/image (4).png';

import PrjIcon1 from '../images/project/logo-1-96x93.png';
import PrjIcon2 from '../images/project/Element_Pyro.svg';
import PrjIcon3 from '../images/project/favicon.ico';
import PrjIcon4 from '../images/project/free-icon-g-3522346.png';

interface ModalBackgroundProps {
  show: boolean;
}

interface Project {
  id: number;
  title: string;
  date: string;
  techs: string[];
  features: string[];
  icon: string; // 아이콘의 URL 경로
  image: string; // 프로젝트 이미지의 URL 경로
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
  max-width: 75%;
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
  width: 85%;
  height: 300px;
  background: url(${PortImg}) no-repeat center/cover;
  margin-bottom: 40px;
  display: flex; // 추가: 중앙에 Portfolio 글자를 위치시키기 위한 설정
  align-items: center;
  justify-content: center;

  /* &::before {
    // Portfolio 글자 추가
    content: 'Portfolio |';
    font-size: 48px;
    color: ${props => props.theme.primaryText};
    position: absolute; // 글자가 이미지 위에 위치하도록 설정
    z-index: 1;
  } */
`;

const PortfolioItem = styled.div`
  width: 100%; // 가로 폭을 100%로 확장하여 Thumbnail과 Description이 여유롭게 배치될 수 있도록 함
  display: flex;
  gap: 30px;
  margin-bottom: 150px;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

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

  @media (max-width: 768px) {
    flex-direction: column; /* 상하배치 */
    align-items: center; /* 가운데 정렬 */
    gap: 20px; /* 간격을 조절하여 상하 간격을 주었습니다. */
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 500px;
  height: 350px;
  border-radius: 25px;
  flex: 1;

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
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    width: 100%; /* 이미지의 가로 길이를 최대로 설정 */
    max-width: 100%; /* 이미지의 최대 가로 길이를 제한 (필요한 경우) */
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1.5;

  & > h2 {
    position: relative;
    padding-left: 40px; // 아이콘 크기를 고려하여 패딩 값을 조절
  }

  & > p {
    margin-bottom: 3px; // 기존의 마진을 줄임
  }

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
    font-size: 18px; // 추가

    &:hover {
      background-color: ${props => props.theme.primaryText}; // 추가
      color: ${props => props.theme.primaryBackground}; // 추가
      transition:
        background-color 0.3s ease,
        color 0.3s ease; // 추가
    }
  }

  @media (max-width: 768px) {
    width: 100%; // 전체 폭을 차지하도록 설정
    padding: 0 20px; // 좌우 패딩 추가로 내부 요소들이 좌우로 조금 더 넓게 표시되게 함

    & > h2 {
      padding-left: 45px; // 아이콘 크기를 고려하여 패딩 값을 조절
    }

    & > button {
      flex: 1.8; // 이미 기존에 존재하던 스타일이므로 주석만 제거
      width: 100%; // 버튼의 가로 길이를 최대로 설정
      max-width: 100%; // 버튼의 최대 가로 길이를 제한 (필요한 경우)
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 80vh; // 전체 뷰포트 높이의 80%를 넘지 않게 설정합니다.
  overflow-y: auto; // 내용이 높이를 초과할 경우 스크롤을 추가합니다.
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
`;

const FullWidthButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryText};
  color: ${props => props.theme.primaryBackground};
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: ${props => props.theme.primaryBackground};
    color: ${props => props.theme.primaryText};
    border: 1px solid ${props => props.theme.primaryText};
  }
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
      icon: `${PrjIcon1}`,
      image: `${PrjImg1}`, // 추가된 이미지 경로
    },
    {
      id: 2,
      title: '프로젝트 제목 2',
      date: '2023/04/02 ~ 2023/05/02',
      techs: ['React', 'TypeScript'],
      features: ['구현 기능 2-1', '구현 기능 2-2'],
      icon: `${PrjIcon2}`,
      image: `${PrjImg2}`,
    },
    {
      id: 3,
      title: '프로젝트 제목 3',
      date: '2023/04/02 ~ 2023/05/02',
      techs: ['React'],
      features: ['구현 기능 3-1'],
      icon: `${PrjIcon3}`,
      image: `${PrjImg3}`,
    },
    {
      id: 4,
      title: '프로젝트 제목 4',
      date: '2023/04/02 ~ 2023/05/02',
      techs: ['React'],
      features: ['구현 기능 4-1'],
      icon: `${PrjIcon4}`,
      image: `${PrjImg4}`,
    },
  ];

  const openModal = (idx: number) => {
    setShowModal(idx);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setShowModal(null);
    document.body.classList.remove('no-scroll');
  };

  return (
    <PortfolioWrapper>
      <BannerWrapper />
      <ContentWrapper>
        {projectList.map((project, idx) => (
          <div key={idx}>
            <h2
              style={{
                backgroundImage: `url(${project.icon})`,
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '35px 35px',
                paddingLeft: '40px',
              }}
            >
              {project.title}
            </h2>
            <PortfolioItem>
              <Thumbnail>
                <img
                  src={project.image}
                  alt="프로젝트 썸네일"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                    objectFit: 'cover',
                  }}
                />
              </Thumbnail>
              <Description>
                <p>{project.date}</p>
                <div className="tech-stack">
                  {project.techs.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p>구현기능</p>
                {project.features.map(feature => (
                  <p key={feature}>• {feature}</p>
                ))}
                <button onClick={() => openModal(idx)}>상세보기</button>
              </Description>
            </PortfolioItem>
          </div>
        ))}
      </ContentWrapper>

      {projectList.map((project, idx) => (
        <ModalBackground key={idx} show={showModal === idx}>
          <Modal>
            <ModalContent>
              <h2>{project.title}</h2>
              <img
                src={project.image}
                alt="프로젝트 사진"
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  objectFit: 'cover',
                }}
              />
              <div className="tech-stack">
                {project.techs.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <LinksWrapper>
                <a href="github-link">GitHub</a>
                <a href="deployed-link">Deploy</a>
                <a href="intro-page-link">Introduce Link</a>
              </LinksWrapper>
              <h3>프로젝트 소개</h3>
              <p>
                이 프로젝트는 ... (프로젝트에 대한 설명을 여기에 추가하세요.)
              </p>
              <h3>구현 기능</h3>
              {project.features.map(feature => (
                <p key={feature}>• {feature}</p>
              ))}
              {/* 프로젝트의 추가적인 상세 구현 기능을 여기에 나열하세요. */}
              <FullWidthButton onClick={() => closeModal()}>
                닫기
              </FullWidthButton>
            </ModalContent>
          </Modal>
        </ModalBackground>
      ))}
    </PortfolioWrapper>
  );
};

export default MyPortfolio;
