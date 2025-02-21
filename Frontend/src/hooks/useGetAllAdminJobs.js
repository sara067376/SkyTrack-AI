import { setAllAdminJobs } from './features/job/jobSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Simulate fetching job data (mock data)
        const mockJobsData = [
            {
                _id: "1",
                title: "Software Engineer",
                company: "Mock Company 1",
                location: "Mock City",
                description: "A great job opportunity for software engineers.",
                postedAt: "2025-02-17T00:00:00Z",
            },
            {
                _id: "2",
                title: "Data Analyst",
                company: "Mock Company 2",
                location: "Mock City",
                description: "A data analyst position in a growing tech company.",
                postedAt: "2025-02-16T00:00:00Z",
            },
            // Add more mock jobs if necessary
        ];

        // Dispatch the mock job data to Redux
        dispatch(setAllAdminJobs(mockJobsData));
        
        // Optionally log to verify the data
        console.log("Mock jobs data:", mockJobsData);
        
    }, [dispatch]);
}

export default useGetAllAdminJobs;
