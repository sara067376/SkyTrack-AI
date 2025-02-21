import { useState } from "react";
import { Slack, AirVent, UserCheck, Search } from "lucide-react"; // Import icons

const JobForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    skills: "",
    certifications: "",
    PreviousJob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Get AI-Powered Job Recommendations and Find Your Dream Job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Skills Input Field */}
        <div className="relative">
          <Slack className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="skills"
            placeholder="Enter Your Skills"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        {/* Certifications Input Field */}
        <div className="relative">
          <AirVent className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="certifications"
            placeholder="Enter Certifications"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        {/* Previous Job Input Field */}
        <div className="relative">
          <UserCheck className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="PreviousJob"
            placeholder="Enter Previous Job"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button with Search Icon */}
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <Search className="mr-2" /> Get Recommended Jobs
        </button>
      </form>
    </div>
  );
};

export default JobForm;
