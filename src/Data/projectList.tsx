import { Project } from '../types/types';

import PrjImg1 from '../images/project/image.png';
import PrjImg2 from '../images/project/image (3).png';
import PrjImg4 from '../images/project/image (2).png';
import PrjImg3 from '../images/project/image (4).png';

import PrjIcon1 from '../images/project/logo-1-96x93.png';
import PrjIcon2 from '../images/project/Element_Pyro.svg';
import PrjIcon3 from '../images/project/favicon.ico';
import PrjIcon4 from '../images/project/free-icon-g-3522346.png';

export const projectList: Project[] = [
  {
    id: 1,
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
        title: '대제목 1',
        contents: [
          {
            subTitle: '소제목 1.1',
            description: '소제목 1.1에 대한 설명 내용입니다.',
          },
          {
            subTitle: '소제목 1.2',
            description: '소제목 1.2에 대한 설명 내용입니다.',
          },
        ],
      },
      {
        title: '대제목 2',
        contents: [
          {
            subTitle: '소제목 2.1',
            description: '소제목 2.1에 대한 설명 내용입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
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
        title: '대제목 1',
        contents: [
          {
            subTitle: '소제목 1.1',
            description: '소제목 1.1에 대한 설명 내용입니다.',
          },
          {
            subTitle: '소제목 1.2',
            description: '소제목 1.2에 대한 설명 내용입니다.',
          },
        ],
      },
      {
        title: '대제목 2',
        contents: [
          {
            subTitle: '소제목 2.1',
            description: '소제목 2.1에 대한 설명 내용입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'MyBlog',
    date: '2023/01/03 ~ 2023/03/22',
    techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
    features: [
      '사용자 인증, 회원가입, 로그인-로그아웃',
      '회원 데이터 및 블로그 포스트와 댓글에 대한 CRUD 기능',
      '게시물의 정렬 및 검색',
    ],
    githubLink: 'https://github.com/Akows/prj06myBlog',
    deployLink: 'https://myblog-350b6.web.app/main',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon3}`,
    image: `${PrjImg3}`,
    detailedDescriptions: [
      {
        title: '대제목 1',
        contents: [
          {
            subTitle: '소제목 1.1',
            description: '소제목 1.1에 대한 설명 내용입니다.',
          },
          {
            subTitle: '소제목 1.2',
            description: '소제목 1.2에 대한 설명 내용입니다.',
          },
        ],
      },
      {
        title: '대제목 2',
        contents: [
          {
            subTitle: '소제목 2.1',
            description: '소제목 2.1에 대한 설명 내용입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Genshinimpact Web',
    date: '2022/11/04 ~ 2022/12/15',
    techs: ['Javascript', 'React.js', 'Context API', 'Firebase'],
    features: [
      '간단한 CRUD 기능이 포함된 익명 자유게시판',
      '순수 Javascript만을 활용한 슬라이드 쇼와 페이지네이션',
      'slice와 filter 메서드를 활용한 게시글 검색',
    ],
    githubLink: 'https://github.com/Akows/prj03RE',
    deployLink: 'https://prj03deploy.web.app/',
    detailedFeatures: ['상세설명 1', '상세설명 2', '상세설명 3'],
    icon: `${PrjIcon4}`,
    image: `${PrjImg4}`,
    detailedDescriptions: [
      {
        title: '대제목 1',
        contents: [
          {
            subTitle: '소제목 1.1',
            description: '소제목 1.1에 대한 설명 내용입니다.',
          },
          {
            subTitle: '소제목 1.2',
            description: '소제목 1.2에 대한 설명 내용입니다.',
          },
        ],
      },
      {
        title: '대제목 2',
        contents: [
          {
            subTitle: '소제목 2.1',
            description: '소제목 2.1에 대한 설명 내용입니다.',
          },
        ],
      },
    ],
  },
];
