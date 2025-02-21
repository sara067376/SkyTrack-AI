const JobResults = ({ jobs }) => {
    return (
      <div className="mt-6">
        {jobs.length === 0 ? (
          <p className="text-gray-600 text-center">No jobs found. Try different inputs.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default JobResults;
  