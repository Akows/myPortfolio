import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // production 환경이 아닐 때만 DevTools 활성화
  // 프로젝트에서 npm 스크립트를 실행했을 때는 상황에 따라서
  // development, production, test로 자동 변경된다.
  // production 코드는 프로젝트 빌드시 설정된다.
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
