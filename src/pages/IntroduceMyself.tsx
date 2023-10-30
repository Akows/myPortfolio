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
  animation: fadeInUp 1s forwards;
`;

const ContentWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  width: 100%;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    padding: 10px;
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

  /* 반응형 미디어 쿼리 적용 */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      width: 300px;
      height: 300px;
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: -20px;
  font-weight: bold;
  color: ${props => props.theme.emphasisColor}; // 강조 색상으로 변경
`;

const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: -10px;
  color: ${props => props.theme.primaryText};

  // 강조하고 싶은 텍스트에 클래스 이름을 추가해 색상을 변경
  span.emphasized {
    color: ${props => props.theme.emphasisColor};
  }
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

    /* 반응형 미디어 쿼리 적용 */
    @media (max-width: 768px) {
      margin-bottom: 20px;
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
  align-items: center; // 가로 배치 상태에서 아이템들을 중앙으로 정렬
  gap: 10px;
  margin-bottom: 10px;

  /* 반응형 미디어 쿼리 적용 */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // 세로 배치 상태에서 아이템들을 중앙으로 정렬
  }
`;

const CategoryTag = styled.span`
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  font-weight: bold;

  // 강조하고 싶은 텍스트에 클래스 이름을 추가해 색상을 변경
  span.emphasized {
    color: ${props => props.theme.emphasisColor};
  }

  /* 반응형 미디어 쿼리 적용 */
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SkillItem = styled.span`
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  margin-right: 10px;
  display: inline-block;

  /* 반응형 미디어 쿼리 적용 */
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EducationItem = styled.div`
  display: flex;
  justify-content: space-between; // 양 끝에 내부 아이템들을 위치시킵니다.
  align-items: center;
  gap: 15px;
  margin-bottom: 10px; // 여백 추가
  font-size: 24px;
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

const Description = styled.p`
  padding-left: 10px;
  position: relative;
  margin-bottom: -10px;

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

const IntroduceMyself: React.FC = () => {
  return (
    <IntroduceWrapper>
      <ContentWrapper>
        <PersonalInfo>
          <img src={MyImg} alt="내사진" />
          <div>
            <h1>이유승 | Lee Yuseung</h1>

            <SubTitle>연락처</SubTitle>
            <InfoText>
              <span className="emphasized">Phone:</span> 010-3629-3686
            </InfoText>
            <InfoText>
              <span className="emphasized">Email:</span> akows141@email.com
            </InfoText>

            <SubTitle>Blog & Github</SubTitle>
            <InfoText>
              <span className="emphasized">velog:</span>
              https://velog.io/@skyoffly
            </InfoText>
            <InfoText>
              <span className="emphasized">myBlog:</span>
              https://myblog-350b6.web.app/main
            </InfoText>
            <InfoText>
              <span className="emphasized">GitHub:</span>
              https://github.com/Akows
            </InfoText>
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
              <CategoryTag>
                <span className="emphasized">프로그래밍 언어:</span>
              </CategoryTag>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>TypeScript</SkillItem>
            </SkillCategory>

            <SkillCategory>
              <CategoryTag>
                <span className="emphasized">프론트엔드 스킬:</span>
              </CategoryTag>
              <SkillItem>Styled Components</SkillItem>
              <SkillItem>React.js</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>React-Redux</SkillItem>
            </SkillCategory>

            <SkillCategory>
              <CategoryTag>
                <span className="emphasized">Co-working 및 Tools:</span>
              </CategoryTag>
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
            <Description>
              4주 동안 기업 과제를 수행하며 기술 역량과 협업 역량 향상을 통해
              취업에 도전.
            </Description>
            <Description>
              기업이 제공하는 실전 과제를 통해 다양한 사례를 분석하여 학습한
              이론 및 기술을 적용하고 기술 과제 해결 역량을 향상.
            </Description>
            <Description>
              취업이라는 같은 목표를 지닌 동료들과 함께 팀 프로젝트를 수행하며
              반면교사, 정면교사 등의 충돌과 교류를 통해 협업 역량을 향상.
            </Description>
          </Education>
        </Section>
      </ContentWrapper>
    </IntroduceWrapper>
  );
};

export default IntroduceMyself;
