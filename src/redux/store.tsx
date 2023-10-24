import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './reducer';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  // production 환경이 아닐 때만 DevTools 활성화.
  // 프로젝트에서 npm 스크립트를 실행했을 때는 상황에 따라서..
  // development, production, test로 자동 변경된다.
  // production 코드는 프로젝트 빌드시 설정된다.
  devTools: process.env.NODE_ENV !== 'production',
});

// 이 타입은 Redux 스토어의 전체 상태를 나타낸다.
// 스토어의 getState 메서드의 반환 타입을 사용하여 상태의 구조를 유추한다.
export type RootState = ReturnType<typeof store.getState>;

// 이 타입은 컴포넌트 및 thunks에서 액션을 dispatch하는 데 유용하다.
// Redux 스토어의 dispatch 메서드의 타입을 나타낸다.
export type AppDispatch = typeof store.dispatch;
