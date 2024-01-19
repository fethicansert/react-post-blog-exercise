import { useState, useEffect } from 'react'
import api from '../Api/axiosApiRequest'

function useAxiosApi(dataUrl){
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   
    useEffect(() => {
        let isMounted = true; // isMounted gerekli mi ?
        const abortController = new AbortController();

        const axiosData = async (url) => {
            try {
                setIsLoading(true);
                const response = await api.get(url,{
                    signal: abortController.signal
                });
                if(isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch(err) { 
                if(isMounted) {
                    if(err.response) {
                        setFetchError(err.message);
                        console.log(err);
                    } else {
                        console.log(err);
                        setFetchError(err.message);
                    }
                }
            } finally {
                setTimeout(() => setIsLoading(false),500);
            }
        }

        axiosData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            abortController.abort();
        }
        return cleanUp;
    },[])

    return { data, fetchError, isLoading };
}

export default useAxiosApi;