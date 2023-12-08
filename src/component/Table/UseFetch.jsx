import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
    useEffect(() => {
     
      fetch(url,{
      headers: {
            // Authorization: `Bearer ${sessionStorage.getItem("jwttoken")}`,
          Authorization:`Bearer ${localStorage.getItem("jwtToken")}`
      },
    }
    )
    .then((res) => {
      if (!res.ok) {
        throw new Error("failed to fetch the data");
      }
      return res.json();
    })
    .then((result) => {
      setTimeout(() => {
        setData(result);
        setLoading(false);
        setError(null);
      }, 1000);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
      },[url])
  return { Data, Error, Loading };
};

export default useFetch;
