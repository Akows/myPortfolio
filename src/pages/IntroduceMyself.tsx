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
  font-weight: bold;
  margin-bottom: -10px;
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

  a {
    font-weight: bolder;

    &:hover {
      color: ${props => props.theme.secondaryText};
    }
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

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillCategoryWrapper = styled.div`
  width: 32%; /* 3분할 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const CategoryTag = styled.span`
  width: 90%;
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 10px;

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
  font-weight: bold;
  display: block; /* 블록 레벨 요소로 만들기 */
  width: 90%;

  margin-bottom: 10px;

  /* 반응형 미디어 쿼리 적용 */
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EducationContent = styled.span`
  font-weight: bold;
  font-size: 28px;
  padding-left: 0px;
  position: relative;
`;

const EducationDate = styled.span`
  color: ${props => props.theme.primaryText};
  margin-top: 5px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  padding-left: 30px;
  position: relative;
  margin-bottom: -5px;

  &::before {
    content: '•';
    position: absolute;
    padding-left: 10px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: ${props => props.theme.secondaryText};

    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 20px;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 0px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding-left: 0px;
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

            <SubTitle>📱연락처</SubTitle>
            <InfoText>
              <span className="emphasized">Phone:_</span>010-3629-3686
            </InfoText>
            <InfoText>
              <span className="emphasized">Email:_</span>akows141@email.com
            </InfoText>

            <SubTitle>🖥️Blog & Github</SubTitle>
            <InfoText>
              <span className="emphasized">velog:_</span>
              <a
                href="https://velog.io/@skyoffly"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://velog.io/@skyoffly
              </a>
            </InfoText>
            <InfoText>
              <span className="emphasized">myBlog:_</span>
              <a
                href="https://myblog-350b6.web.app/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://myblog-350b6.web.app/main
              </a>
            </InfoText>
            <InfoText>
              <span className="emphasized">GitHub:_</span>

              <a
                href="https://github.com/Akows"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Akows
              </a>
            </InfoText>
          </div>
        </PersonalInfo>

        <Section>
          <h2>👩🏻‍💻 자기소개</h2>
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
          <h2>🧮 기술 스택</h2>
          <SkillWrapper>
            <SkillCategoryWrapper>
              <CategoryTag>
                <span className="emphasized">#️프로그래밍 스킬:</span>
              </CategoryTag>
              <SkillItem>1️⃣ HTML</SkillItem>
              <SkillItem>2️⃣ CSS</SkillItem>
              <SkillItem>3️⃣ JavaScript</SkillItem>
              <SkillItem>4️⃣ TypeScript</SkillItem>
            </SkillCategoryWrapper>

            <SkillCategoryWrapper>
              <CategoryTag>
                <span className="emphasized">#️프론트엔드 스킬:</span>
              </CategoryTag>
              <SkillItem>1️⃣ React.js</SkillItem>
              <SkillItem>2️⃣ Redux</SkillItem>
              <SkillItem>3️⃣ React-Redux</SkillItem>
              <SkillItem>4️⃣ Styled Components</SkillItem>
            </SkillCategoryWrapper>

            <SkillCategoryWrapper>
              <CategoryTag>
                <span className="emphasized">#️Co-working 및 Tools:</span>
              </CategoryTag>
              <SkillItem>1️⃣ VS Code</SkillItem>
              <SkillItem>2️⃣ Git</SkillItem>
              <SkillItem>3️⃣ Github</SkillItem>
              <SkillItem>4️⃣ Sourcetree</SkillItem>
              <SkillItem>5️⃣ Firebase</SkillItem>
              <SkillItem>6️⃣ Vercel</SkillItem>
            </SkillCategoryWrapper>
          </SkillWrapper>
        </Section>

        <Section>
          <h2>📝 교육</h2>
          <EducationWrapper>
            <LeftContent>
              <EducationContent>
                원티드 프리온보딩 프론트엔드 인턴십 12차
              </EducationContent>
              <EducationDate>(2023.08 ~ 2023.09)</EducationDate>
            </LeftContent>

            <RightContent>
              <SubSectionTitle>교육 목적</SubSectionTitle>
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

              <SubSectionTitle>주차별 프로젝트의 구현 내용</SubSectionTitle>

              <Description>
                외부 API와 연계하여 JWT 토큰과 Web Storage를 이용한 간단한 회원
                기능 및 TodoList 기능.
              </Description>
              <Description>
                Git REST API를 사용하여 특정 Repo의 이슈 데이터를 받아와서
                적절한 형태로 화면에 출력하는 기능.
              </Description>
              <Description>
                JSON 형식의 DB 데이터를 호출하여 화면에 출력, 자동 검색 및 Local
                Cache와 Debounce을 이용한 API 호출 최적화 기능.
              </Description>
              <Description>
                JSON 형식의 DB 데이터를 호출하여 차트 라이브러리를 이용해
                데이터를 시각화하는 기능.
              </Description>
            </RightContent>
          </EducationWrapper>
        </Section>
      </ContentWrapper>
    </IntroduceWrapper>
  );
};

export default IntroduceMyself;
