import { createSlice } from '@reduxjs/toolkit';

// 테마 상태 정의
interface ThemeState {
  value: 'white' | 'black';
}

const initialState: ThemeState = {
  value: 'white', // 초기 테마 설정
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // 테마 변경 액션
    toggleTheme: state => {
      if (state.value === 'white') {
        state.value = 'black';
      } else {
        state.value = 'white';
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
