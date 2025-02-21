import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

// Example mock applicants data
const applicants = [
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
];

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    // Simulate status update without backend
    const statusHandler = (status, id) => {
        console.log(`Status of application ${id} updated to: ${status}`);
        toast.success(`Application ${id} status updated to ${status}`);
    };

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied user</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants.map((item) => (
                            <tr key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell >
                                    {
                                        item.applicant?.profile?.resume ? 
                                            <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">
                                                {item?.applicant?.profile?.resumeOriginalName}
                                            </a> : <span>NA</span>
                                    }
                                </TableCell>
                                <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="float-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortlistingStatus.map((status, index) => (
                                                    <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                        <span>{status}</span>
                                                    </div>
                                                ))
                                            }
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;
