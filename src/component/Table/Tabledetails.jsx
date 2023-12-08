import React from 'react'
import useFetch from './UseFetch';
import Table from './Table';
const Tabledetails = () => {
       let id=localStorage.getItem("userId")
        //  let id = sessionStorage.getItem("UserId");
         const { Data, Loading, Error } = useFetch(
           `http://localhost:5000/product/${id}`  );
  return (
      <div className='tabledetails'>
          
          {Error && <h2>{Error}</h2>}
          {Loading && <h2>loading</h2>}
          {Data && <Table data={ Data} />}
    </div>
  )
}

export default Tabledetails
