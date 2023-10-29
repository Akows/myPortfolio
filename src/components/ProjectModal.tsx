import React from 'react';
import styled from 'styled-components';
import { Project } from '../types/types';

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
  show: boolean;
}

interface ModalBackgroundProps {
  show: boolean;
}

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

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  closeModal,
  show,
}) => {
  return (
    <ModalBackground show={show}>
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
          <p>이 프로젝트는 ... (프로젝트에 대한 설명을 여기에 추가하세요.)</p>
          <h3>구현 기능</h3>
          {project.detailedFeatures.map(feature => (
            <p key={feature}>• {feature}</p>
          ))}
          <FullWidthButton onClick={closeModal}>닫기</FullWidthButton>
        </ModalContent>
      </Modal>
    </ModalBackground>
  );
};

export default ProjectModal;
