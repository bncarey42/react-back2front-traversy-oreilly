import { useState, useEffect } from "react"


function useFetch(url:string, options:object) {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null)
    const [data, setData]=useState(null)
    useEffect(() => {
        const fetchData = async () => {
            await fetch(url, options)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => setErr(err))
                    .finally(() => setLoading(false));
            
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {data, loading, err}
}

export default useFetch