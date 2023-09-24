import { useEffect, useState } from "react";

export default useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [renderValue, renderValueTrigger] = useState(false);

    const options = {
        method: 'GET',
    };

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url, options);
                if(!response.ok) {
                    throw new Error('Network error occured!');
                }
                const json = await response.json();
                setData(json);
            } catch(err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const msUntilMidnight = tomorrow - now;
        

        const timeoutId = setTimeout(() => {
          renderValueTrigger(prevRenderValue => !prevRenderValue);
        }, msUntilMidnight);

        return () => {
          clearTimeout(timeoutId);
        };

    }, [url, renderValue])

    function toggleReload() {
        renderValueTrigger(!renderValue);
    }

    return { data, isLoading, error, toggleReload };
}