import React, { useEffect } from 'react'
import { product } from '../../../../connection/db'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Deleteproduct = () => {
  const{productId,vendorId}=useParams()
  const handleClick=()=>{
    fetch(`http://localhost:;5000/delete/${productId}/${vendorId}`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${localStorage.getItem("jwtToken")}`,
        "content-type":"application/json"
      }
    }).then((result)=>{
      return result.json()
    }).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      toast.error(error)
    })
  } 
   
  
  return (
    <div>
        <button>delete</button>
    </div>
  )
}

export default Deleteproduct