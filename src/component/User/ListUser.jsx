import React, { useEffect } from 'react'
// import useFetch from './useFetch'
import userCss from "./user.module.css"

const ListUser = ({data}) => {
    
  return (
    <div className={userCss.user}>
      <div className={userCss.text}>
        <h2>customers</h2>
      </div>
        <table className={userCss.userlist}>
          <thead>
            <tr>
              <th>customerId</th>
              <th>CustomerName</th>
            <th>email</th>
            {/* <th>delete</th> */}
            
            </tr>
          </thead>
          <tbody>
            {
              data.transaction.map((er) => (
                <tr>
                  <td>{er.customer.id}</td>
                  <td>{er.customer.name}</td>
                  <td>{er.customer.email}</td>
                  {/* <td>delete</td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
   
  );
}

export default ListUser
