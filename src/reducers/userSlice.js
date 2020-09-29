import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
    username: '',
  },
  reducers: {
    login(state, action) {
      const {username, token} = action.payload;
      state.isLoggedIn = true;
      state.token = token;
      state.username = username;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
