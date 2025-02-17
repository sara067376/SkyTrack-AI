// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import jobReducer from '../features/job/jobSlice'
import authSlice from '../features/authSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    job: jobReducer,
  },
})

export default store
