import React from 'react';
import styled from 'styled-components';
import { Project } from '../types/types';

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
  show: boolean;
  currentTheme: 'white' | 'black';
}

const ModalBackground = styled.div<ProjectModalProps>`
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
  display: flex; // Flexbox 적용
  flex-direction: column; // 세로 방향으로 아이템 배치
  width: 80%;
  max-width: 800px;
  height: 90%;
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};
  padding: 20px;
  border-radius: 5px;
  align-items: center; // 가운데 정렬

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

const ModalHeader = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  & > p {
    margin: 0;
    font-size: 35px;
    font-weight: bolder;
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 80vh;
  overflow-y: auto;

  padding-top: 20px; // h2의 높이를 고려하여 패딩 추가
  padding-bottom: 20px; // FullWidthButton의 높이를 고려하여 패딩 추가

  h2 {
    margin-top: 10px;
    margin-bottom: -15px; // h2의 하단 마진 감소
  }

  p {
    font-size: 15px; // 글자 크기 증가
    font-weight: bold; // 굵게
  }

  .section-divider {
    height: 1px;
    background-color: #ccc; // 파트 구분을 위한 줄 색상
    margin: 15px 0; // 줄의 위아래 마진을 설정
  }

  div > h4 {
    margin-top: 3px;
    margin-bottom: 5px; // 간격 줄임
    font-size: 17px; // 글자 크기 증가
    font-weight: 600; // 가벼운 볼드 스타일
  }

  div > div > p {
    /* 구현 기능 본문의 p 태그 */
    padding-left: 20px; // 점 문자를 위한 공간 확보
    position: relative;

    &::before {
      content: '•'; // 점 문자
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%); // 세로 중앙 정렬
      font-size: 20px;
    }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;

  h4 {
    margin-bottom: 3px; // 간격 줄임
  }

  a {
    font-weight: bold; // 굵게
    transition: color 0.3s; // 부드러운 색상 전환 효과
    font-size: 16px;

    &:hover {
      color: grey; // 마우스 호버시 회색으로 변경
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
  font-size: 15px;
  flex-wrap: wrap;

  span {
    background-color: grey;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 16px; // 글자 크기 증가
    font-weight: bold; // 굵게
  }
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
  }
`;

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  closeModal,
  show,
  currentTheme,
}) => {
  return (
    <ModalBackground
      show={show}
      project={project}
      closeModal={closeModal}
      currentTheme={currentTheme}
    >
      <Modal>
        <ModalHeader>
          <p
            style={{
              backgroundImage: `url(${project.icon})`,
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '35px 35px',
              paddingLeft: '40px',
            }}
          >
            {project.title}
          </p>
        </ModalHeader>
        <ModalContent>
          <img
            src={project.image}
            alt="프로젝트 사진"
            style={{
              width: '100%',
              borderRadius: '25px',
              objectFit: 'cover',
            }}
          />
          <h2>구현 기간</h2>
          <p>🕚 {project.date}</p>
          <div className="section-divider" />

          <h2>Link</h2>
          <LinksWrapper>
            <h4>Github</h4>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 {project.githubLink}
            </a>
            <h4>배포링크</h4>
            <a href={project.deployLink}>🔗 {project.deployLink}</a>
          </LinksWrapper>
          <div className="section-divider" />

          <h2>사용 기술</h2>
          <TechStack>
            {project.techs.map(tech => (
              <span key={tech}>🛠 {tech}</span>
            ))}
          </TechStack>
          <div className="section-divider" />

          <h2>구현 기능</h2>
          {project.detailedDescriptions.map(detail => (
            <div key={detail.title}>
              <h4>{detail.title}</h4>
              {detail.contents.map(content => (
                <div key={content.description}>
                  <p>{content.description}</p>
                </div>
              ))}
            </div>
          ))}
        </ModalContent>
        <ModalFooter>
          <FullWidthButton onClick={closeModal}>닫기</FullWidthButton>
        </ModalFooter>
      </Modal>
    </ModalBackground>
  );
};

export default ProjectModal;
