import React, { useState } from 'react'
import "./form.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"
const Login = () => {
  const formik =useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema:Yup.object({
      email:Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"enter a vaid  email").required("Email required"),
      password:Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
        'Password must be at least 8 characters long '
        
      ).required("Password required")
    }),
    onSubmit:(values)=>{
      fetch("https://vendor-website.onrender.com/vendor/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
         
        },
        body: JSON.stringify(values)
      })
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then((res) => {
          console.log(res);
 
          const jwtToken = res.token
          console.log(jwtToken)
          let userId = res.vendor.id
          console.log(userId)
          localStorage.setItem("jwtToken", jwtToken);
          localStorage.setItem("userId", userId)
           navigate("/");
          toast.success("vendor logged in");
        
        });


    }

  })
  const navigate =useNavigate()
  
  return (
    <div className='register'>
  
      <div className="image a">
        <h2>vendor admin login</h2>
        <form onSubmit={formik.handleSubmit} className='form-register'>
          <div className="form-label">
            <input type="text" placeholder='Enter your name' name="email" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && <p style={{color:"red",width:"300px"}}>{formik.errors.email}</p>}
          </div>
          <div className="form-label">
            <input type="password" name="password" id="" placeholder="Enter your passworrd" value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && <p style={{color:"red" ,width:"300px"}}>{formik.errors.password}</p>}
          </div>
          <div className="submits">
            <input type="submit" value="Login" />
          </div>
          <div className="input-text">
            Not a Vendor <a href="/register">sign up</a>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
