import { setSingleCompany } from '../features/companySlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Simulate fetching company data (mock data)
        const mockCompanyData = {
            _id: companyId,
            name: "Mock Company Name",
            description: "This is a mock description for the company.",
            website: "https://www.mockcompany.com",
            location: "Mock City, Mock Country",
            file: null, // You can simulate a file if needed
        };

        // Dispatch the mock company data to Redux
        dispatch(setSingleCompany(mockCompanyData));
        
        // Optionally log to verify the data
        console.log("Mock company data:", mockCompanyData);
        
    }, [companyId, dispatch]);
}

export default useGetCompanyById;
