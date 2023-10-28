import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* DNF 비트비트체V2 웹폰트 속성 */
  @font-face{
   font-family: 'DNFBitBitv2';
   font-style: normal;
   font-weight: 400;
   src: url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
  }

  /* 항상 스크롤바가 보이도록 설정 */
  html {
    overflow-y: scroll;
  }

  /* 기본 폰트 설정. 'DNFBitBitv2'를 사용하되, 실패할 경우 sans-serif 폰트 사용 */
  body {
    font-family: 'DNFBitBitv2', sans-serif;
  }

  /* 모달 UI 출력시 페이지의 스크롤이 동작하지 않도록 하는 */
  body.no-scroll {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }

  /* 스크롤바 스타일 설정 */
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 핸들 색상 */
    border-radius: 4px; /* 스크롤바 핸들 모서리 둥글게 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 스크롤바 핸들 마우스 오버 시 색상 */
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 스크롤바 배경 색상 */
  }
`;

export default GlobalStyles;
