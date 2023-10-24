import React from 'react';
import styled from 'styled-components';

const IntroduceWrapper = styled.div`
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

const PersonalInfo = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

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

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillCategory = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Education = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const IntroduceMyself: React.FC = () => {
  return (
    <IntroduceWrapper>
      <ContentWrapper>
        <PersonalInfo>
          <img src="path-to-your-photo.jpg" alt="사진 어딨냐..." />
          <div>
            <h1>이유승</h1>
            <p>Phone: 123-4567-7899</p>
            <p>Email: email@email.com</p>
            <p>Blog: http://myblog.com</p>
            <p>GitHub: http://github.com/mymy</p>
          </div>
        </PersonalInfo>

        <Section>
          <h2>자기소개</h2>
          <p>나를 소개소개...</p>
        </Section>

        <Section>
          <h2>기술 스택</h2>
          <Skill>
            <SkillCategory>Front-end</SkillCategory>
            <p>React, JavaScript, TypeScript, HTML, CSS...</p>

            <SkillCategory>Co-working 및 Tools</SkillCategory>
            <p>Git...</p>
          </Skill>
        </Section>

        <Section>
          <h2>교육</h2>
          <Education>
            <div>
              <p>• 받은 교육...</p>
              <p>• 받은 교육...</p>
            </div>
            <div>
              <p>1 (123213 - 123123)</p>
              <p>2 (123213 - 123123)</p>
            </div>
          </Education>
        </Section>
      </ContentWrapper>
    </IntroduceWrapper>
  );
};

export default IntroduceMyself;
