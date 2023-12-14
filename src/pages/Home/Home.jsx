import React, { useState } from 'react'
import "./home.css"
import Sidebar from "../../component/SideBar/Sidebar.jsx"
import Navbar from '../../component/NavBar/Navbar.jsx'
import Card from "../../component/Card/Card.jsx"
import Table from "../../component/Table/Table.jsx"
import useFetch from '../../component/Table/UseFetch';
import Tabledetails from '../../component/Table/Tabledetails.jsx'
const Home = () => {
  let id = localStorage.getItem("userId");
  const { Data, Loading, Error } = useFetch(
    `https://vendor-website.onrender.com/vendor/${id}`
  );
  const [showNav, setShowNav] = useState(false)
  const HandleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <div className="home">
      <div className='home-sidebar'>
      <Sidebar show={showNav} />
      </div>
      
      <div className='navbar-container'>
        <div className="toggle-icon" onClick={HandleNav} >
          {showNav ?
            <i class="fa fa-times" aria-hidden="true"></i> :
             <i class="fa fa-bars" aria-hidden="true"></i>}
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
      <div className='main-containers'>
        <div className="card-container">
          <Card
            type="Customer"
            quantity="15"
            link="view customer"
            icon="fa fa-user"
          />

          <Card
            type="Product"
            quantity="15"
            link="view product"
            icon="fa fa-cart-plus"
          />
          <Card type="transaction" quantity="15" link="view transaction" icon="fa fa-shopping-bag" />

        </div>
        <div className="table">

          <Tabledetails />
        </div>
      </div>



    </div>
    // </div>
  );
}

export default Home
