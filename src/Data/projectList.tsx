import { Project } from '../types/types';

import PrjImg1 from '../images/project/image.png';
import PrjImg2 from '../images/project/image (3).png';
import PrjImg4 from '../images/project/image (2).png';
import PrjImg3 from '../images/project/image (4).png';
import PrjImg5 from '../images/project/images.png';

import PrjImg6 from '../images/project/mainimg.png';

import PrjIcon1 from '../images/project/logo-1-96x93.png';
import PrjIcon2 from '../images/project/Element_Pyro.svg';
import PrjIcon3 from '../images/project/favicon.ico';
import PrjIcon4 from '../images/project/free-icon-g-3522346.png';
import PrjIcon5 from '../images/project/logo5.jpg';

export const projectList: Project[] = [
  {
    id: 1,
    title: '똘개비',
    date: '2025.04 ~ 2025.05',
    techs: ['Typescript', 'Next.js', 'Express.js', 'MySQL', 'AWS EC2/RDS/CloudWatch', 'Prisma', 'Zod', 'Morgan', 'Sentry'],
    features: [
      '나의 똘똘한 개인 비서, 일정 관리/날씨와 뉴스 정보/약속 장소까지 교통 정보 제공',
      '팀 구성 :: 프론트엔드 2명(UI/UX 디자인 포함), 백엔드 3명(배포, 인프라 포함)',
      '나의 역할 :: 팀장, 백엔드 개발 및 유지보수',
    ],
    githubLink: 'https://github.com/orgs/kdt5-3rd/repositories',
    deployLink:
      'https://ttolgaebi.com/',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon5}`,
    image: `${PrjImg6}`,
    detailedDescriptions: [
      {
        title: '🧩 주요 역할 및 성과',
        contents: [
          {
            description:
              '기획, 일정 관리, 회의 리딩 등 프로젝트 전반 주도.',
          },
          {
            description:
              'MVP 목표를 설정하고, 기능별 1차/2차 우선순위를 명확히 구분하여 단계별 개발 계획 수립.',
          },
          {
            description:
              '기능 통합 이슈 해결 및 팀원 간 협업 구조 조율.',
          },
        ],
      },
      {
        title: '기술 구현 및 운영 경험',
        contents: [
          {
            description:
              'AWS EC2/RDS를 이용한 서버 인프라 구축 및 HTTPS(SSL) 인증 완료.',
          },
          {
            description: 'GitHub Actions를 이용해 main 브랜치 병합 시 자동 배포되는 CI/CD 파이프라인 구축.',
          },
          {
            description: 'Express.js + Prisma ORM 조합으로 RESTful API 설계 및 구현.',
          },
          {
            description: 'JWT 기반 인증/인가 시스템 구축 및 보안 강화 (CORS 세분화, 민감 경로 차단 등).',
          },
          {
            description: 'Zod 라이브러리를 통해 API 입력 데이터 유효성 검사 체계화.',
          },
          {
            description: 'Morgan 기반 파일 로깅 + Sentry 연동을 통한 실시간 에러 모니터링 시스템 구축.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Essence Aura',
    date: '2023/12/23 ~ 2024/02/28',
    techs: ['Typescript ', 'React.js', 'Express.js', 'MySQL', 'AWS'],
    features: [
      'JWT를 기반으로 하는 인증 시스템을 사용하는 회원기능',
      'Prepared Statements, Parameterized Queries 기법을 적용한 SQL 인젝션 방지 로직',
      'Debounce, IntersectionObserver API 등이 적용된 다양한 최적화 기술들',
    ],
    githubLink: 'https://github.com/Akows/prj08EssenceAura',
    deployLink:
      'http://essenceaura-production.s3-website.ap-northeast-2.amazonaws.com/',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon5}`,
    image: `${PrjImg5}`,
    detailedDescriptions: [
      {
        title: '사용자 관련 기능:',
        contents: [
          {
            description:
              '회원가입과 로그인 및 로그아웃, 로그인 기능을 구현하였습니다.',
          },
          {
            description:
              '사용자 이메일 찾기, 비밀번호 초기화 기능을 구현하였습니다.',
          },
          {
            description:
              '사용자 정보 조회 및 수정 및 사용자 주문 내역 조회을 구현하였습니다.',
          },
        ],
      },
      {
        title: '쇼핑몰 관련 기능:',
        contents: [
          {
            description:
              '주문 생성 및 결제 처리, 제품 목록 및 상세 조회 기능을 구현하였습니다.',
          },
          {
            description: '제품 검색 및 추천 검색어 기능을 구현하였습니다.',
          },
          {
            description: '로컬 스토리지 기반의 장바구니 기능을 구현하였습니다.',
          },
        ],
      },
      {
        title: '보안 관련 기능:',
        contents: [
          {
            description:
              'JWT 기반의 인증 시스템을 구축하여 사용자 인증 상태 검증 기능을 구현하였습니다.',
          },
          {
            description:
              'bcrypt 라이브러리를 사용하여 회원가입시 사용자 비밀번호를 암호화하여 저장하도록 하였습니다.',
          },
          {
            description:
              'HTTP Only 및 Secure 쿠키를 사용하여 클라이언트단에서 CSS(Cross Site Scripting) 공격을 방지하였습니다.',
          },
          {
            description:
              '사용자 입력값에 대한 유효성 검사를 실시하여 에러 방지 및 CSS(Cross Site Scripting) 공격을 방지하였습니다.',
          },
          {
            description:
              'Prepared Statements을 적용하여 SQL 인젝션 방지 로직을 구현하였습니다.',
          },
          {
            description:
              'NodeMailer 라이브러리를 이용한 이메일 인증 기능을 구현하였습니다.',
          },
        ],
      },
      {
        title: '최적화 관련 기능:',
        contents: [
          {
            description:
              'Debounce 함수를 구현하여 사용자 검색어 입력 처리를 최적화하였습니다.',
          },
          {
            description:
              'IntersectionObserver API을 이용한 무한스크롤 기능 및 페이지네이션 기능을 구현하여 데이터 호출 과정을 최적화하였습니다.',
          },
        ],
      },
      {
        title: 'UI/UX 관련 기능:',
        contents: [
          {
            description:
              '반응형 웹을 구현하여 다양한 디바이스에서의 호환성을 보장하도록 하였습니다.',
          },
        ],
      },
      {
        title: '배포 관련:',
        contents: [
          {
            description:
              'AWS S3, EC2, RDS를 이용하여 프로젝트의 프론트엔드, 백엔드, 데이터베이스 서비스를 배포할 수 있는 환경을 구축하였습니다. ',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Genshindex',
    date: '2023/08/30 ~ 2023/09/04',
    techs: ['Typescript ', 'React.js', 'Styled Components', 'Vercel'],
    features: [
      '외부 API 호출로 데이터를 가져와 적절한 형태로 가공하여 화면에 출력',
      '무한 스크롤 기능을 통한 API 호출의 최적화',
      '반응형 웹과 CSS 애니매이션으로 데스크톱 - 모바일 환경의 부드러운 전환',
    ],
    githubLink: 'https://github.com/Akows/prj04remake',
    deployLink: 'https://prj04remake.vercel.app/',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon1}`,
    image: `${PrjImg1}`,
    detailedDescriptions: [
      {
        title: '코드 안정성 및 품질 향상:',
        contents: [
          {
            description:
              'Typescript를 도입하여 프로젝트 코드의 안정성과 타입 안전성을 향상시켰습니다.',
          },
          {
            description:
              'Eslint와 Prettier를 통합하여 코드 스타일과 규칙의 일관성을 보장, 전체 코드의 균일성을 유지했습니다.',
          },
        ],
      },
      {
        title: 'UI/UX 개선 및 성능 최적화:',
        contents: [
          {
            description:
              '외부 API 호출로 데이터를 가져올 때, Intersection Observer API를 활용한 Infinity Scroll 구현으로 불필요한 호출을 최소화하여 자원의 낭비를 지양하고 기능을 최적화했습니다.',
          },
          {
            description:
              'Styled Components를 도입하여 Javascript와 연계된 CSS 스타일링으로 UI 구현의 효율성과 유연성을 향상시켰습니다.',
          },
          {
            description:
              'CSS Media Query로 반응형 웹 디자인을 구현하여 데스크톱과 모바일 간의 전환을 원활하게 지원하였습니다.',
          },
          {
            description:
              'CSS Animation과 keyframes를 통해 UI 전환 시 부드러운 애니메이션을 적용하여 사용자 경험을 향상시켰습니다.',
          },
        ],
      },
      {
        title: '컴포넌트 구조 및 재사용성:',
        contents: [
          {
            description:
              '프로젝트의 컴포넌트 구조를 재검토하여 관심사 별로 적절하게 분리하였고, 이를 통해 컴포넌트의 재사용성과 유지보수성을 크게 향상시켰습니다.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Pyro Blossom',
    date: '2023/05/01 ~ 2023/08/11',
    techs: [
      'Javascript',
      'React.js',
      'Redux',
      'React-Redux',
      'Styled Components',
      'Vercel',
    ],
    features: [
      '회원가입, 로그인-로그아웃, 회원정보 조회 및 수정과 탈퇴',
      '회원정보 및 상품, 리뷰 데이터의 CRUD 기능',
      '가상의 제품 등록, 조회, 수정, 삭제, 구매 및 관리',
    ],
    githubLink: 'https://github.com/Akows/prj07Pyroblossom',
    deployLink: 'https://prj07pyroblossom.web.app/store',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon2}`,
    image: `${PrjImg2}`,
    detailedDescriptions: [
      {
        title: 'Firebase & Firestore 관련 기능:',
        contents: [
          {
            description:
              'Google Firebase를 사용한 회원 인증 기능: 회원가입, 로그인, 로그아웃, 회원정보 조회 및 수정/탈퇴 기능을 지원합니다.',
          },
          {
            description:
              'FireStore를 이용한 회원 데이터 관리 및 상품 및 리뷰 데이터에 대한 CRUD 기능을 구현했습니다.',
          },
          {
            description:
              '제품 등록, 조회, 수정, 삭제의 기능을 통해 가상의 판매 제품을 관리합니다.',
          },
          {
            description:
              'FireStore 쿼리를 활용하여 특정 제품에 대한 카테고리 검색, 키워드 검색, 및 제품 리스트를 5가지 기준으로 정렬하는 기능을 구현했습니다.',
          },
          {
            description:
              'FireStore 쿼리를 이용하여 pagination 기능을 추가하여 불필요한 데이터 호출을 최소화했습니다.',
          },
        ],
      },
      {
        title: 'UI & UX 향상 및 사용성 개선:',
        contents: [
          {
            description:
              '회원 가입 및 로그인 과정에서의 유효성 검사, 중복 체크, 값 입력 여부를 검증했습니다.',
          },
          {
            description:
              '바닐라 Javascript만을 사용하여 슬라이드 기능을 구현하고, 사용자의 사용성을 증대하기 위해 마우스 Drag and Drop과 Screen Touch로 슬라이드를 넘길 수 있게 만들었습니다.',
          },
          {
            description:
              '포인트 적립 및 사용, 그리고 결제 내역 및 내역 조회 기능을 통해 사용자 경험을 향상시켰습니다.',
          },
        ],
      },
      {
        title: '디자인 & 반응형 웹 구현:',
        contents: [
          {
            description:
              'CSS Media Query를 활용하여 데스크톱과 모바일 환경에서의 반응형 웹 UI를 구현하여 사용자의 환경에 따른 웹 페이지의 모양을 최적화했습니다.',
          },
          {
            description:
              'CSS Animation과 keyframes를 사용하여 반응형 웹 UI의 전환을 부드럽고 자연스럽게 구현했습니다.',
          },
        ],
      },
      {
        title: '전역 상태 관리:',
        contents: [
          {
            description:
              'Redux와 React-Redux를 활용하여 프로젝트의 전역 state를 관리하였으며, 이를 통해 props drilling 문제를 방지하고 전체 프로젝트의 상태 관리의 복잡도를 줄였습니다.',
          },
        ],
      },
    ],
  },
  // {
  //   id: 4,
  //   title: 'MyBlog',
  //   date: '2023/01/03 ~ 2023/03/22',
  //   techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
  //   features: [
  //     '사용자 인증, 회원가입, 로그인-로그아웃',
  //     '회원 데이터 및 블로그 포스트와 댓글에 대한 CRUD 기능',
  //     '게시물의 정렬 및 검색',
  //   ],
  //   githubLink: 'https://github.com/Akows/prj06myBlog',
  //   deployLink: 'https://myblog-350b6.web.app/main',
  //   detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
  //   icon: `${PrjIcon3}`,
  //   image: `${PrjImg3}`,
  //   detailedDescriptions: [
  //     {
  //       title: 'Firebase & Firestore 관련 기능:',
  //       contents: [
  //         {
  //           description:
  //             'Google Firebase를 활용하여 사용자 인증 및 회원가입, 로그인, 로그아웃 등의 회원 관리 기능을 구현했습니다.',
  //         },
  //         {
  //           description:
  //             'FireStore를 이용하여 회원 데이터와 게시글, 댓글에 대한 CRUD 기능을 구현했습니다.',
  //         },
  //         {
  //           description:
  //             '게시글의 분류 및 검색 기능을 위해 FireStore 쿼리를 적용했습니다.',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'UI/UX 및 반응형 웹 구현:',
  //       contents: [
  //         {
  //           description:
  //             '순수 Javascript를 이용하여 효율적인 pagination 기능을 구현했습니다.',
  //         },
  //         {
  //           description:
  //             'CSS Media Query를 통해 데스크톱 및 모바일 환경에 대응하는 반응형 웹 디자인을 구현했습니다.',
  //         },
  //         {
  //           description:
  //             '웹 페이지의 전환 및 애니메이션 효과를 위해 CSS Animation과 keyframes를 활용하여 사용자 경험을 향상시켰습니다.',
  //         },
  //       ],
  //     },
  //     {
  //       title: '전역 상태 관리 및 코드 품질:',
  //       contents: [
  //         {
  //           description:
  //             'Context API를 도입하여 전역 상태 관리를 효율화하고, 이를 통해 props drilling 문제를 해결했습니다.',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: 'Genshinimpact Web',
  //   date: '2022/11/04 ~ 2022/12/15',
  //   techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
  //   features: [
  //     '간단한 CRUD 기능이 포함된 익명 자유게시판',
  //     '순수 Javascript만을 활용한 슬라이드 쇼와 페이지네이션',
  //     'slice와 filter 메서드를 활용한 게시글 검색',
  //   ],
  //   githubLink: 'https://github.com/Akows/prj03RE',
  //   deployLink: 'https://prj03deploy.web.app/',
  //   detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
  //   icon: `${PrjIcon4}`,
  //   image: `${PrjImg4}`,
  //   detailedDescriptions: [
  //     {
  //       title: '개선된 코드 품질 및 가독성:',
  //       contents: [
  //         {
  //           description:
  //             '코드 가독성, 유지보수성에 문제가 있던 구버전에 대한 반성을 바탕으로 코드의 가독성 및 구조를 크게 개선했습니다.',
  //         },
  //       ],
  //     },
  //     {
  //       title: '데이터 관리 및 전역 상태 관리:',
  //       contents: [
  //         {
  //           description:
  //             'Web Storage를 도입하여 사용자 데이터의 CRUD 기능을 효과적으로 구현했습니다.',
  //         },
  //         {
  //           description:
  //             'Context API를 활용하여 전역 상태를 관리하고, props drilling 문제를 방지했습니다.',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'UI/UX 디자인 및 기능 구현:',
  //       contents: [
  //         {
  //           description:
  //             '다양한 image와 icon을 조합하여 고품질의 UI를 설계하고 구현했습니다.',
  //         },
  //         {
  //           description:
  //             'Javascript의 slice와 filter 메서드를 활용하여 사용자가 원하는 게시글을 검색 및 필터링하여 화면에 표시하는 기능을 제공합니다.',
  //         },
  //         {
  //           description:
  //             '외부 라이브러리에 의존하지 않고 순수 바닐라 Javascript만을 활용하여 슬라이드 및 pagination 기능을 구현했습니다.',
  //         },
  //       ],
  //     },
  //     {
  //       title: '반응형 디자인 및 애니메이션:',
  //       contents: [
  //         {
  //           description:
  //             'CSS Media Query를 사용하여 데스크톱과 모바일 간의 원활한 전환을 지원하는 반응형 웹 디자인을 구현했습니다.',
  //         },
  //         {
  //           description:
  //             '사용자 경험을 향상시키기 위해 CSS Animation과 keyframes를 활용하여 부드러운 웹 UI 전환 애니메이션을 적용했습니다.',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
