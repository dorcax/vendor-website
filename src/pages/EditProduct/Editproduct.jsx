import {React,useState} from 'react'
import Sidebar from "../../component/SideBar/Sidebar"
import Navbar from '../../component/NavBar/Navbar'
import Editproduct from '../../component/EditProduct/Editproduct'
import  edit from "./edit.module.css"
import useFetch from '../../component/Table/UseFetch';
const Editproducts = () => {

  let id = localStorage.getItem("userId");
  const { Data, Loading, Error } = useFetch(
    `https://vendor-website.onrender.com/vendor/${id}`
  );
  const [showNav, setShowNav] = useState(false)
  const HandleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <div className={edit.container}>
        <Sidebar/>
        <div className='navbar-container'>
        <div className="toggle-icon" onClick={HandleNav} >
          {showNav ?
            <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i>}
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
            <div className={edit.main}>
                <Editproduct />
            </div>
        </div>
    
  )
}

export default Editproducts