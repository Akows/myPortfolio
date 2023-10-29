import React, { useState } from 'react';
import styled from 'styled-components';

import PortImg from '../images/pexels-ann-h-14936128.jpg';

import PrjImg1 from '../images/project/image.png';
import PrjImg2 from '../images/project/image (3).png';
import PrjImg4 from '../images/project/image (2).png';
import PrjImg3 from '../images/project/image (4).png';

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
  githubLink: string;
  deployLink: string;
  detailedFeatures: string[];
  icon: string;
  image: string;
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

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

    &:hover:before {
      content: '프로젝트 배포 URL로 이동...';
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
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
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
    font-size: 15px;
    flex-wrap: wrap;

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
      title: 'Genshindex',
      date: '2023/08/30 ~ 2023/09/04',
      techs: ['Typescript ', 'React.js', 'Styled Components', 'Vercel'],
      features: [
        '외부 API 호출로 데이터를 가져와 적절한 형태로 가공하여 화면에 출력',
        '무한 스크롤 기능을 통한 API 호출의 최적화',
        '반응형 웹과 CSS 애니매이션으로 데스크톱 - 모바일 환경의 부드러운 전환',
      ],
      githubLink: 'https://github.com/Akows/prj04remake',
      deployLink: 'https://prj04remake.vercel.app/',
      detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
      icon: `${PrjIcon1}`,
      image: `${PrjImg1}`, // 추가된 이미지 경로
    },
    {
      id: 2,
      title: 'Pyro Blossom',
      date: '2023/05/01 ~ 2023/08/11',
      techs: [
        'Javascript',
        'React.js',
        'Redux',
        'React-Redux',
        'Styled Components',
        'Vercel',
      ],
      features: [
        '회원가입, 로그인-로그아웃, 회원정보 조회 및 수정과 탈퇴',
        '회원정보 및 상품, 리뷰 데이터의 CRUD 기능',
        '가상의 제품 등록, 조회, 수정, 삭제, 구매 및 관리',
      ],
      githubLink: 'https://github.com/Akows/prj07Pyroblossom',
      deployLink: 'https://prj07pyroblossom.web.app/store',
      detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
      icon: `${PrjIcon2}`,
      image: `${PrjImg2}`,
    },
    {
      id: 3,
      title: 'MyBlog',
      date: '2023/01/03 ~ 2023/03/22',
      techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
      features: [
        '사용자 인증, 회원가입, 로그인-로그아웃',
        '회원 데이터 및 블로그 포스트와 댓글에 대한 CRUD 기능',
        '게시물의 정렬 및 검색',
      ],
      githubLink: 'https://github.com/Akows/prj06myBlog',
      deployLink: 'https://myblog-350b6.web.app/main',
      detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
      icon: `${PrjIcon3}`,
      image: `${PrjImg3}`,
    },
    {
      id: 4,
      title: 'Genshinimpact Web',
      date: '2022/11/04 ~ 2022/12/15',
      techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
      features: [
        '간단한 CRUD 기능이 포함된 익명 자유게시판',
        '순수 Javascript만을 활용한 슬라이드 쇼와 페이지네이션',
        'slice와 filter 메서드를 활용한 게시글 검색',
      ],
      githubLink: 'https://github.com/Akows/prj03RE',
      deployLink: 'https://prj03deploy.web.app/',
      detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
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
          <div key={idx} style={{ width: '90%' }}>
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
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                </a>
              </Thumbnail>

              <Description>
                <p>{project.date}</p>
                <a href={project.githubLink}>GitHub</a>
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
              {project.detailedFeatures.map(feature => (
                <p key={feature}>• {feature}</p>
              ))}
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
