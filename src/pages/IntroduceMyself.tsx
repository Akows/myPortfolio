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

  span.emphasized {
    display: inline-block;
    min-width: 70px;
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
              <span className="emphasized">Phone:</span>010-3629-3686
            </InfoText>
            <InfoText>
              <span className="emphasized">Email:</span>akows141@email.com
            </InfoText>

            <SubTitle>🖥️Blog & Github</SubTitle>
            <InfoText>
              <span className="emphasized">velog:</span>
              <a
                href="https://velog.io/@skyoffly"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://velog.io/@skyoffly
              </a>
            </InfoText>
            <InfoText>
              <span className="emphasized">myBlog:</span>
              <a
                href="https://myblog-350b6.web.app/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://myblog-350b6.web.app/main
              </a>
            </InfoText>
            <InfoText>
              <span className="emphasized">GitHub:</span>

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
          <h3>
            새로운 기술을 빠르게 흡수해 실전에 적용하는 풀스택 개발자입니다.
          </h3>
          <b>자기주도적으로 문제를 해결하고 빠르게 적응하는 개발자입니다.</b>
          <p>
            프론트부터 백엔드, DB, 인프라 운영까지 전 주기를 경험하며
            TypeScript, React.js, Express.js, MySQL, AWS, Git, Notion 등을
            활용해 프로젝트 기획부터 구현, 인프라 구축, 배포 및 운영까지 개발 전
            과정을 주도적으로 완수했습니다. 특히 7인 팀 프 로젝트에서 팀장을
            맡아 RESTful API 설계, AWS 기반 인프라 구축, CI/CD 자동화, 실시간
            에러 모니터링(Sentry+Slack)까지 주도하며 단순 구현을 넘어, 안정적인
            서 비스 운영과 품질 관리 시스템을 구축했습니다.
          </p>
          <b>프론트엔드에 국한되지 않는 풀스택 역량을 가진 개발자입니다.</b>
          <p>
            다양한 분야의 기술 지식을 바탕으로 팀원들과의 효율적
            커뮤니케이션으로 프로젝 트 목표를 성공적으로 달성해왔습니다. 이번
            프로젝트에서는 팀원 간의 기술적 견해 차이를 조율하고 문제 해결을
            주도해 API 정상 작동률 95% 유지, 장애 복구 평균 30분 이내 대응,
            CI/CD 자동화로 배포 시간 70% 단축의 성과를 만들어냈습니다.
          </p>
          <b>지속적인 학습과 성장을 실천하는 개발자입니다.</b>
          <p>
            개인 블로그를 운영하며 약 300개의 기술 포스트를 작성하며, 최신 기술
            트렌드, 풀 스택 아키텍처 설계, DevOps 사례 등을 기록했습니다. 이를
            통해 직면한 기술 문제 해결 과정을 기록하며, 도구와 프레임워크에 대한
            깊이 있는 이해를 지속적으로 넓 혀왔습니다.
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
              <SkillItem>3️⃣ JavaScript, TypeScript</SkillItem>
            </SkillCategoryWrapper>

            <SkillCategoryWrapper>
              <CategoryTag>
                <span className="emphasized">#️프론트엔드/백엔드 스킬:</span>
              </CategoryTag>
              <SkillItem>1️⃣ React.js</SkillItem>
              <SkillItem>2️⃣ Redux</SkillItem>
              <SkillItem>3️⃣ Styled Components, TailwindCSS</SkillItem>
              <SkillItem>4️⃣ Node.js, Express.js</SkillItem>
              <SkillItem>5️⃣ Zod, Morgan</SkillItem>
            </SkillCategoryWrapper>

            <SkillCategoryWrapper>
              <CategoryTag>
                <span className="emphasized">#️Co-working 및 Tools:</span>
              </CategoryTag>
              <SkillItem>1️⃣ Git, Github, Sourcetree</SkillItem>
              <SkillItem>2️⃣ AWS EC2, RDS, S3, Route 53, CloudWatch</SkillItem>
              <SkillItem>3️⃣ Slack, Notion</SkillItem>
              <SkillItem>4️⃣ Sentry</SkillItem>
            </SkillCategoryWrapper>
          </SkillWrapper>
        </Section>

        <Section>
          <h2>📝 교육</h2>
          <EducationWrapper>
            <LeftContent>
              <EducationContent>
                프로그래머스 데브코스 풀스택 5기
              </EducationContent>
              <EducationDate>(2024.11 ~ 2025.05)</EducationDate>
            </LeftContent>

            <RightContent>
              <SubSectionTitle>교육 목적</SubSectionTitle>
              <Description>
                웹 전반 기술(Git, REST API, JWT, React+TS, Docker 등)을
                실습하며, 다수의 실무형 프로젝트(DB 모델링, 일정 관리 시스템,
                문서 편집기 등) 수행
              </Description>
              <Description>
                기획 수립, 기술 스택 선정, 역할 분담 등 프로젝트 전반을 주도하며
                팀 리딩 역량 강화
              </Description>
              <Description>
                Express.js, Prisma, AWS EC2/RDS 기반 인프라 구성 및 GitHub
                Actions로 CI/CD 자동화 구축
              </Description>
              <Description>
                Notion, Git, Slack을 활용한 문서 중심 협업 체득
              </Description>
              <Description>
                ChatGPT 기반 설계 리뷰, 테스트 자동화 및 반복 작업 최적화로
                생산성 향상
              </Description>
            </RightContent>
          </EducationWrapper>

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
