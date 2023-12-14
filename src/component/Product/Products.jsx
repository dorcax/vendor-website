import { React,useState } from "react";
import products from "./products.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup"
// import axios from "axios"


const Products = () => {
 
  const navigate =useNavigate()

  const formik =useFormik({
    initialValues:{
      name:"",
      description:"",
      price:"",
      quantity:""
    },
    validationSchema:Yup.object({
       name:Yup.string().min(6).max(15,"product name must be atleast 15").required("Name required"),
       description:Yup.string().min(20).required("Description required"),
       price:Yup.number().min(0).required("Price required"),
       quantity:Yup.number().min(0).required("Quantity required")
    }),
    onSubmit:(values)=>{
   
      const price = values.price
      const quantity =values.quantity
      const reg = {
        name: values.name,
        description: values.description,
        price: +price,
        quantity:+quantity
      }
      let userId =localStorage.getItem('userId')
      fetch(`https://vendor-website.onrender.com/product/${userId}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
           Authorization:`Bearer ${localStorage.getItem("jwtToken")}`
        },
        body: JSON.stringify(reg),
      }).then((response) => response.json())
      
        .then((result) => {
          console.log(result);
          navigate("/")
          toast.success("product created");
        })
        .catch((error) => {
          toast.error(error);
        });
      
    }

  })
   


  

  return (
    <div className="product" >
      <div className={products.producttext}>
        <h2>add product</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className={products.addproduct}>
        <div className={products.formdetails}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id=""
            value={formik.values.name}
            onChange={formik.handleChange}
           
          />
          {formik.errors.name &&<p style={{color:"red"}}>{formik.errors.name} *</p>}
        </div>
        <div className={products.formdetails}>
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            id=""
            value={formik.values.description}
            onChange={formik.handleChange}
           
          />
          {formik.errors.description &&<p style={{color:"red"}}>{formik.errors.description}*</p>
          }
        </div>
        <div className={products.formdetails}>
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            id=""
            value={formik.values.price}
            onChange={formik.handleChange}
         
          />
          {formik.errors.price && <p style={{color:"red"}}>{formik.errors.price} *</p>}
        </div>
        <div className={products.formdetails}>
          <label htmlFor="quantity">quantity</label>
          <input
            type="number"
            name="quantity"
            id=""
            value={formik.values.quantity}
            
            onChange={formik.handleChange}
            
          />
          {formik.errors.quantity && <p style={{color:"red"}}>{formik.errors.quantity}*</p>}
        </div>

        <div className={products.submit}>
          <input type="submit" value=" add product" />
        </div>
      </form>
    </div>
  );
}

export default Products
