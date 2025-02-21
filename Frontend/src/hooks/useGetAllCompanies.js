import { setCompanies } from '../features/companySlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Mocked data for frontend-only testing
        const mockCompanies = [
            { id: 1, name: 'Company A' },
            { id: 2, name: 'Company B' },
            { id: 3, name: 'Company C' }
        ];
        
        console.log('Mock data used');
        dispatch(setCompanies(mockCompanies));
    }, []);
}

export default useGetAllCompanies;
