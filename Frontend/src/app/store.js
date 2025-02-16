// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import jobReducer from '../features/job/jobSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    job: jobReducer,
  },
})

export default store
