import React, { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '../features/job/jobSlice';
import { toast } from 'sonner';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);
    
    const dispatch = useDispatch();
    const { id: jobId } = useParams();

    const applyJobHandler = () => {
        if (!isApplied) {
            const updatedJob = { 
                ...singleJob, 
                applications: [...singleJob.applications, { applicant: user?._id }]
            };

            dispatch(setSingleJob(updatedJob)); // Redux store update
            setIsApplied(true); // Local UI update
            toast.success('Successfully applied for the job!');
        }
    };

    return (
        <div className='max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg'>
            <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
                <div>
                    <h1 className='font-bold text-2xl text-gray-900'>{singleJob?.title}</h1>
                    <div className='flex flex-wrap gap-3 mt-4'>
                        <Badge className='bg-blue-100 text-blue-700 px-3 py-1'>{singleJob?.position} Positions</Badge>
                        <Badge className='bg-cyan-100 text-cyan-700 px-3 py-1'>{singleJob?.jobType}</Badge>
                        <Badge className='bg-purple-100 text-purple-700 px-3 py-1'>{singleJob?.salary} Dollars</Badge>
                    </div>
                </div>
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`mt-4 sm:mt-0 px-6 py-3 text-white font-semibold rounded-lg transition-all ${
                        isApplied 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#7191fa] hover:bg-[#4b65fa]'
                    }`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>

            <h2 className='border-b-2 border-gray-300 text-lg font-semibold py-4 mt-6'>Job Details</h2>
            <div className='mt-4 space-y-2'>
                <p><strong>Role:</strong> <span className='text-gray-700'>{singleJob?.title}</span></p>
                <p><strong>Location:</strong> <span className='text-gray-700'>{singleJob?.location}</span></p>
                <p><strong>Description:</strong> <span className='text-gray-700'>{singleJob?.description}</span></p>
                <p><strong>Experience:</strong> <span className='text-gray-700'>{singleJob?.experience} years</span></p>
                <p><strong>Salary:</strong> <span className='text-gray-700'>{singleJob?.salary} Dollars</span></p>
                <p><strong>Total Applicants:</strong> <span className='text-gray-700'>{singleJob?.applications?.length}</span></p>
                <p><strong>Posted Date:</strong> <span className='text-gray-700'>{singleJob?.createdAt?.split("T")[0]}</span></p>
            </div>
        </div>
    );
};

export default JobDescription;
