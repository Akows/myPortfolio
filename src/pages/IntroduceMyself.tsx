import React from 'react';
import styled from 'styled-components';

import MyImg from '../images/upimage.jpg';

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
  margin-bottom: 150px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 20%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: -20px;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
`;

const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: -10px;
  color: ${props => props.theme.primaryText};
`;

const Section = styled.div`
  margin-bottom: 150px;

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

const SkillCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CategoryTag = styled.span`
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  font-weight: bold;
`;

const SkillItem = styled.span`
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  margin-right: 10px;
  display: inline-block;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const EducationContent = styled.span`
  font-weight: bold;
  padding-left: 10px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: ${props => props.theme.secondaryText};
  }
`;

const EducationDate = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 14px;
`;

const IntroduceMyself: React.FC = () => {
  return (
    <IntroduceWrapper>
      <ContentWrapper>
        <PersonalInfo>
          <img src={MyImg} alt="내사진" />
          <div>
            <h1>이유승 | Lee Yuseung</h1>

            <SubTitle>연락처</SubTitle>
            <InfoText>Phone: 010-3629-3686</InfoText>
            <InfoText>Email: akows141@email.com</InfoText>

            <SubTitle>Blog & Github</SubTitle>
            <InfoText>velog: https://velog.io/@skyoffly</InfoText>
            <InfoText>myBlog: https://myblog-350b6.web.app/main</InfoText>
            <InfoText>GitHub: https://github.com/Akows</InfoText>
          </div>
        </PersonalInfo>

        <Section>
          <h2>자기소개</h2>
          <p>
            사용자 중심의 서비스 개발에 열정을 가지고 있는 프론트엔드 개발자
            이유승입니다.
          </p>
          <p>
            다양한 프로젝트를 통해 사용자 친화적인 UI와 효율적인 기능 구현을
            위해 끊임없이 학습하고 도전하고 있습니다. 기술과 창의력을 결합하여
            세상에 긍정적인 영향을 미치고 싶습니다.
          </p>
        </Section>

        <Section>
          <h2>기술 스택</h2>
          <Skill>
            <SkillCategory>
              <CategoryTag>프로그래밍 언어</CategoryTag>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>TypeScript</SkillItem>
            </SkillCategory>

            <SkillCategory>
              <CategoryTag>프론트엔드 스킬</CategoryTag>
              <SkillItem>Styled Components</SkillItem>
              <SkillItem>React.js</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>React-Redux</SkillItem>
            </SkillCategory>

            <SkillCategory>
              <CategoryTag>Co-working 및 Tools</CategoryTag>
              <SkillItem>VS Code</SkillItem>
              <SkillItem>Git</SkillItem>
              <SkillItem>Github</SkillItem>
              <SkillItem>Sourcetree</SkillItem>
              <SkillItem>Firebase</SkillItem>
              <SkillItem>Vercel</SkillItem>
            </SkillCategory>
          </Skill>
        </Section>

        <Section>
          <h2>교육</h2>
          <Education>
            <EducationItem>
              <EducationContent>
                원티드 프리온보딩 프론트엔드 인턴십 12차
              </EducationContent>
              <EducationDate>(2023.08 ~ 2023.09)</EducationDate>
            </EducationItem>
            • 설명 1
          </Education>
        </Section>
      </ContentWrapper>
    </IntroduceWrapper>
  );
};

export default IntroduceMyself;
