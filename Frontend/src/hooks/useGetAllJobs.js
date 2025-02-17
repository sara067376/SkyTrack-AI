import { setAllJobs } from '../features/job/jobSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        // Dummy job data
        const dummyJobs = [
            { id: 1, title: "Software Engineer", company: "Tech Corp", location: "Remote" },
            { id: 2, title: "Frontend Developer", company: "Web Solutions", location: "Lahore" },
            { id: 3, title: "Backend Developer", company: "CodeBase", location: "Karachi" }
        ];

        // Simulating API response delay (optional)
        setTimeout(() => {
            dispatch(setAllJobs(dummyJobs));
        }, 1000); // 1-second delay

    }, [searchedQuery]); // Runs whenever searchedQuery changes

    return null; // Since it's a hook, it doesn't return JSX
};

export default useGetAllJobs;
