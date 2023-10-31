import React from 'react';
import styled from 'styled-components';

import { Project } from '../types/types';

interface ProjectItemProps {
  project: Project;
  openModal: (idx: number) => void;
  currentTheme: 'white' | 'black';
}

const StyledProjectItem = styled.div`
  width: 90%;
  margin-bottom: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 500px;
  height: 550px;
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

const Description = styled.div<{ themeName: 'white' | 'black' }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1.5;
  width: 100%;

  & > h2 {
    position: relative;
    padding-left: 40px; // 아이콘 크기를 고려하여 패딩 값을 조절
  }

  & > h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: -10px;
    margin-top: 0px;
  }

  & > p {
    margin-bottom: 3px; // 기존의 마진을 줄임
  }

  .tech-stack {
    display: flex;
    gap: 5px;
    margin: 10px 0;
    font-size: 15px;
    flex-wrap: wrap;

    span {
      color: ${props => props.theme.emphasisColor};
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid;
      border-color: ${props => (props.themeName === 'white' ? '#333' : '#aaa')};
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

const DateText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

const GitLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;

  font-weight: 500;

  &:hover {
    color: grey;
  }
`;

const Divider = styled.div`
  height: 1px; // 선의 높이
  background-color: grey; // 선의 색상
  margin: 10px 0; // 상하 여백
`;

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  openModal,
  currentTheme,
}) => {
  return (
    <StyledProjectItem>
      <h2
        style={{
          backgroundImage: `url(${project.icon})`,
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '35px 35px',
          paddingLeft: '40px',
          fontSize: '32px',
        }}
      >
        {project.title}
      </h2>
      <Container>
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

        <Description themeName={currentTheme}>
          <h3>구현기간</h3>
          <DateText>⏰ {project.date}</DateText>
          <Divider />
          <GitLink
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {project.githubLink}
          </GitLink>
          <Divider />
          <div className="tech-stack">
            {project.techs.map(tech => (
              <span key={tech}>🛠 {tech}</span>
            ))}
          </div>
          <Divider />
          <h3>구현기능</h3>
          {project.features.map(feature => (
            <p key={feature}>• {feature}</p>
          ))}
          <Divider />
          <button onClick={() => openModal(project.id)}>📑 상세보기</button>
        </Description>
      </Container>
    </StyledProjectItem>
  );
};

export default ProjectItem;
