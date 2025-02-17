import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterCard, Job } from '../components';
import { motion } from 'framer-motion';
import { setSearchedQuery } from '../features/job/jobSlice'; // Assuming setSearchedQuery exists in your slice
import {Link} from 'react-router-dom'
const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job); // Fetching jobs from Redux store
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const dispatch = useDispatch(); // To dispatch actions

    // Effect to filter jobs based on searchedQuery
    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs); // Show all jobs if no search query
        }
    }, [allJobs, searchedQuery]);

    

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex gap-5">
                    <div className="w-full md:w-1/4 lg:w-1/5">
                        <FilterCard />
                    </div>
                    
                    {
                        filterJobs.length <= 0 ? <span className="text-gray-500">No jobs found</span> : (
                            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}
                                                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Jobs;
