import React from 'react'
import Transaction from './Transaction'
import useFetch from "../User/useFetch"

const Transactiondetails = () => {
  let id =localStorage.getItem("userId")
  const{data,Loading,Error} =useFetch(`http://localhost:5000/vendor/${id}`)
  return (
    <div>
      {Error && <h2>{Error}</h2>}
      {Loading && <h2>loading</h2>}
      {data && <Transaction data={data} />}
    </div>
  );
}

export default Transactiondetails
