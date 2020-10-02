import {configureStore} from '@reduxjs/toolkit';
import {loadState, saveState} from '../api/localStorage';
import userReducer from '../reducers/userSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState()
});
store.subscribe(()=>{
  console.log("Store has changed and triggered saveState!")
  saveState(store.getState());
});
export default store;