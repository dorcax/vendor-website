import React, { useEffect } from 'react'
import "./table.css"
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'

const Table = ({ data }) => {
  
  const handleClick=(productId)=>{
    let vendorId =localStorage.getItem("userId")
    console.log(vendorId)
     
      if(window.confirm("do you want to delete the product")){
        fetch(`http://localhost:5000/product/delete/${productId}/${vendorId}`,{
          method:"DELETE",
          headers:{
            Authorization:`Bearer ${localStorage.getItem("jwtToken")}`,
            "content-type":"application/json"
          }
        }).then((result)=>{
          window.location.reload()
          return result.json()
        }).then((res)=>{
          console.log(res)
        }).catch((error)=>{
          toast.error(error)
        })
      
      }
  
    
  
    
      
    }
   
  return (
    <div className="table-container">
   
      <table className='tableList'>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>name</th>
            <th>description</th>
            <th>quantity</th>
            <th>price</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.product.map((er) => (
            <tr key={er.id}>

              {/* <td>{er.id}</td> */}
              <td>{er.name}</td>
              <td>{er.description}</td>
              <td>{er.quantity}</td>
              <td>{er.price}</td>
              <td ><Link to={`/product/${er.id}/${er.vendor.id}` } style={{textDecoration:"none",color:"#000"}}  >edit</Link></td>
              <td onClick={()=>{handleClick(er.id)}}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table
