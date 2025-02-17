import React from 'react';
import { Badge } from './ui/badge'; // Assuming Badge is styled properly
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-xl text-gray-900">{job?.company?.name}</h1>
                    <p className="text-sm text-gray-500">Europe</p>
                </div>
                {/* You can add logo here if needed */}
            </div>

            <div className="my-4">
                <h2 className="font-bold text-lg text-gray-800">{job?.title}</h2>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>

            <div className="flex items-center gap-3 mt-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    {job?.salary} Dollars
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
