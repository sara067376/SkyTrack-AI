import React from "react";
import { useState } from "react";
import JobForm from "../components/AIJobRecommendation/JobForm";
import JobResults from "../components/AIJobRecommendation/JobResults";
import Loader from "../components/AIJobRecommendation/Loader";
import Notification from "../components/AIJobRecommendation/Notification";

const AIJobAssist = () => {
  // State variables (currently not used, but kept for future backend integration)
  /* 
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSearch = async (formData) => {
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch("https://your-backend-api.com/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setJobs(data.jobs);
    } catch (error) {
      setNotification({ message: "Error fetching jobs!", type: "error" });
    } finally {
      setLoading(false);
    } 
  }; 
  */

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto p-6 flex-grow">
        {/* Commented out onSearch function since backend is not used */}
        <JobForm onSearch={() => {}} />
        {/* {loading && <Loader />}
        {notification && <Notification {...notification} />}
        <JobResults jobs={jobs} /> */}
      </main>
    </div>
  );
};

export default AIJobAssist;
