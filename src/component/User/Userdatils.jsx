import React from 'react'
import useFetch from './useFetch'
import ListUser from './ListUser'
import userCss from "./user.module.css"

const Userdatils = () => {
  let id =localStorage.getItem("userId")
  //  let num=26
    const{data,Loading,Error} =useFetch(`http://localhost:5000/vendor/${id}`)
  return (
      <div className={userCss.tableContainer}>
      {Error && <h2>{Error}</h2>}
      {Loading && <h2>loading</h2>} 
       {data && <ListUser data={ data} />}   
      {/* <ListUser/> */}
    </div>
  )
}

export default Userdatils
