// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import jobReducer from '../features/job/jobSlice'
import authSlice from '../features/authSlice'
import companySlice from '../features/companySlice'
import applicationSlice from '../features/applicationSlice'




export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    job: jobReducer,
    company : companySlice,
    application : applicationSlice,
  },
})

export default store
