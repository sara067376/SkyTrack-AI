import React, { useEffect } from 'react';
import ApplicantsTable from '../components/admin/ApplicantsTable';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '../features/applicationSlice'

// Example mock applicants data
const mockApplicantsData = {
    applications: [
        {
            _id: "1",
            applicant: {
                fullname: "John Doe",
                email: "johndoe@example.com",
                phoneNumber: "+1234567890",
                profile: {
                    resume: "http://example.com/resume.pdf",
                    resumeOriginalName: "resume.pdf",
                },
                createdAt: "2025-02-17T10:30:00Z",
            }
        },
        {
            _id: "2",
            applicant: {
                fullname: "Jane Smith",
                email: "janesmith@example.com",
                phoneNumber: "+1987654321",
                profile: {
                    resume: "http://example.com/resume2.pdf",
                    resumeOriginalName: "resume2.pdf",
                },
                createdAt: "2025-02-16T14:45:00Z",
            }
        }
    ]
};

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        // Simulate fetching data
        dispatch(setAllApplicants(mockApplicantsData));
    }, [dispatch]);

    return (
        <div>
            
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
                <ApplicantsTable />
            </div>
        </div>
    );
};

export default Applicants;
