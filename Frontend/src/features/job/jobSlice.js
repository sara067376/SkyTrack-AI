import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  allJobs: [],          // Stores all available jobs
  allAdminJobs: [],     // Stores jobs posted by admin
  singleJob: null,      // Stores details of a single selected job
  searchJobByText: "",  // Stores text-based job searches
  allAppliedJobs: [],   // Stores jobs user has applied to
  searchedQuery: "",    // Stores filtered search query (e.g., location, industry)
};

// Job Slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    //  Set all jobs
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    //  Set a single job (for detailed view)
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    //  Set all jobs posted by the admin
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    //  Set searched jobs by text input
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    //  Set all applied jobs
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    //  Set filtered query (for advanced filters)
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
  },
});

// Export Actions
export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;

// Export Reducer
export default jobSlice.reducer;
