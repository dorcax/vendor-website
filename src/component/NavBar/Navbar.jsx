import React from 'react'
import "./navbar.css"
import useFetch from '../Table/UseFetch';
const Navbar = () => {

  let id = localStorage.getItem("userId");
  const { Data, Loading, Error } = useFetch(
    `https://vendor-website.onrender.com/vendor/${id}`
  );
  // let name =Data.vendor.name
  return (
    <div className='navbar-container'>
      <div className="toggle-icon" >
        {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
        {toggle ? 
              <i class="fa fa-times" aria-hidden="true"></i>  :  <i class="fa fa-bars" aria-hidden="true"></i> }
       </div>
      
      <div className="search">
        <i className="fa-solid fa-search"></i>
        <input type="search" name="" id="" />
      </div>
      <div className="nav-text">
        <i className="fa-solid fa-bell"></i>
        {Data && <h2> {Data.name}</h2>}
      </div>
    </div>
  );
}

export default Navbar
