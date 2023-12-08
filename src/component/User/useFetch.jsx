import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [Loading, setLoading] = useState(true)
    const[Error,setError]=useState(null)
    
    useEffect(() => {
        fetch(url, {
            headers: {
                Authorization:`Bearer ${localStorage.getItem("jwtToken")}`
            }
        }).then((result) => {
            if (!result.ok) {
          
            throw new Error("failed to fetch the data")
            }
            return result.json();
        }).then((res) => {
            setTimeout(() => {
                setData(res)
                setLoading(false)
                setError(null)
                
                
            },1000)
        }).catch((error) => {
            setError(error.message)
            setLoading(false)
        })

    },[url])
  return {data,Loading,Error}
   
}

export default useFetch
