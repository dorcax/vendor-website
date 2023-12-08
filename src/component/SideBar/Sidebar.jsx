import { React, useState } from 'react'
import "./sidebar.css"
import useFetch from '../Table/UseFetch';

const Sidebar = ({show}) => {


  // fetching an endpoint
  let id = localStorage.getItem("userId");''
  const { Data, Loading, Error } = useFetch(
    `http://localhost:5000/vendor/${id}`
  );
 
  return (
    <div className={show ?"sidenav":"sidebar"}>
       
       <div className="logo">
        <h2>smartEcommerce</h2>
      </div>
      <nav >
        <ul className="ul-container">
          <li>
            <i className="fa-solid fa-chart-pie"></i>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <i className="fa-solid fa-list"></i> <a href="/product">Product</a>
          </li>
          <li>
            <i className="fa-solid fa-list"></i>
            <a href="/users">List user</a>
          </li>
          <li>
            <i className="fa-solid fa-list"></i>
            <a href="/transaction">Transaction</a>
          </li>
          <li>
            <i className="fa-solid fa-user"></i> <a href="/login">Login</a>
          </li>
          <li>
            <i className="fa-solid fa-user"></i> <a href="">logout</a>
          </li>
        </ul>
       
      </nav>
    </div>

  
     
    
  );
}

export default Sidebar
