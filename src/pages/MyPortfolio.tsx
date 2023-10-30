import React, { useState } from 'react';
import styled from 'styled-components';

import PortImg from '../images/pexels-ann-h-14936128.jpg';

import ProjectItem from '../components/ProjectItem';
import ProjectModal from '../components/ProjectModal';
import { projectList } from '../Data/projectList';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PortfolioWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding-top: 80px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.primaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s forwards;
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
`;

const MyPortfolio: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  // 몇번 모달창을 출력할 것인지 제어하는 state.
  const [showModal, setShowModal] = useState<number | null>(null);

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
        {projectList.map(project => (
          <ProjectItem
            key={project.id}
            project={project}
            openModal={openModal}
            currentTheme={currentTheme}
          />
        ))}
      </ContentWrapper>

      {projectList.map(project => (
        <ProjectModal
          key={project.id}
          project={project}
          closeModal={closeModal}
          show={showModal === project.id}
          currentTheme={currentTheme}
        />
      ))}
    </PortfolioWrapper>
  );
};

export default MyPortfolio;
