import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (config) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);
    
    useEffect(() => {
        const getSpoonacularData = async () => {
            const assets = await axios(config);
            const data = assets.data;
            setData(data);
            setIsLoading(false);
            setError(null);
        };

        getSpoonacularData()
            .then(() => console.log('Resolved.'))
            .catch(err => {
                setIsLoading(false);
                setError(err.message)
            });
    }, [config]);
    return {data, isLoading, error};
};

export default useAxios;
