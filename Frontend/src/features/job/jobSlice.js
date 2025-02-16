// src/features/job/jobSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobs: [],
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload
    },
    clearJobs: (state) => {
      state.jobs = []
    },
  },
})

export const { setJobs, clearJobs } = jobSlice.actions
export default jobSlice.reducer
