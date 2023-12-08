import React, { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import * as Yup from "yup"

import "./form.css"
const Register = () => {
  // const [data, setData] = useState({ name: "", email: "", password: "" })
  // const[Error,setError] =useState(null)
// handle change function
  // const handleChange = (evt) => {
  //   const changeField = evt.target.name
  //   const changeValue = evt.target.value
  //   setData((previousData) => {
  //     return {
  //       ...previousData,[changeField]:changeValue
  //     }
  //   })
    
  // }

  // use forrmik
  const formik =useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""

    },
    
    validationSchema:Yup.object({
      name:Yup.string().min(5).max(15,"must be 15 characters or less").required(" Name required"),
      email:Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"enter a vaid  email").required("Email required"),
      password:Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
        'Password must be at least 8 characters long '
        
      ).required("password required ")


    }),
    onSubmit:(values)=>{
      console.log("submited")
      fetch("http://localhost:5000/vendor", {
        method: "POST",
        headers: {
          "content-type":"application/json"
        },
        body:JSON.stringify(values)
      }).then((res) => {
        toast.success("vendor registered")
        navigate("/login")
      }).catch((error) => {
        toast.error(error.message)
      })
    }

    
  })

  console.log(formik.errors)
  // console.log(formik.values)
  const navigate =useNavigate()




  return (
    <div className="register">
      <div className="image b">
        <h2>vendor registration</h2>

        <form  onSubmit={formik.handleSubmit} className='form-login'>  
          <div className="form-label">
      
            <input type="text" name="name" id="" placeholder="Enter your name" 
            //  value={data.name} onChange={handleChange} 
            value={formik.values.name}
            onChange={formik.handleChange}
             />
             {formik.errors.name ?<p style={{color:"red"}}>{formik.errors.name}</p>:null}
          </div>
          <div className="form-label">
            <input type="email" name="email" id="" placeholder="Enter your email"  
            // value={data.email} onChange={handleChange}
            value={formik.values.email}
            onChange={formik.handleChange}
            />
            {formik.errors.email? <p style={{color:"red"}}>{formik.errors.email}</p>:null} 
          </div>
          <div className="form-label">
            <input type="password" name="password" id="password" placeholder="password" 
            // value={data.password} onChange={handleChange}

            value={formik.values.password}
            onChange={formik.handleChange}
             />
             {formik.errors.password ?<p style={{color:"red",width:"300px"
            }}>{formik.errors.password}</p>:null}
          </div>
          <div className="submits">
            <input type="submit" value="register" />
          </div>
          <div className="input-text">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register
