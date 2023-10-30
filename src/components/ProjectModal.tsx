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
  max-height: 80vh;
  overflow-y: auto;

  h2 {
    margin-bottom: -10px; // h2의 하단 마진 감소
  }

  .section-divider {
    height: 1px;
    background-color: #ccc; // 파트 구분을 위한 줄 색상
    margin: 15px 0; // 줄의 위아래 마진을 설정
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
`;

const TechStack = styled.div`
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
              borderRadius: '25px',
              objectFit: 'cover',
            }}
          />
          <h2>구현 기간</h2>
          <p>{project.date}</p>
          <div className="section-divider" />

          <h2>Link</h2>
          <LinksWrapper>
            <a href={project.githubLink}>GitHub</a>
            <a href={project.deployLink}>Deploy</a>
          </LinksWrapper>
          <div className="section-divider" />

          <h2>사용 기술</h2>
          <TechStack>
            {project.techs.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </TechStack>
          <div className="section-divider" />

          <h2>구현 기능</h2>
          {project.detailedDescriptions.map(detail => (
            <div key={detail.title}>
              <h4>{detail.title}</h4>
              {detail.contents.map(content => (
                <div key={content.subTitle}>
                  <h5>{content.subTitle}</h5>
                  <p>{content.description}</p>
                </div>
              ))}
            </div>
          ))}
          <FullWidthButton onClick={closeModal}>닫기</FullWidthButton>
        </ModalContent>
      </Modal>
    </ModalBackground>
  );
};

export default ProjectModal;
