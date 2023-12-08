import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import product from "./edit.module.css"
import { toast } from 'react-toastify'
const Editproduct = () => {
    const [data, setData] = useState({ id: "", name: "", description: "", quantity: "", price: "" })
    const { productId, vendorId } = useParams()
    // const [Error,setError]=useState(null)


    const HandleChange = (evt) => {
        const changeField = evt.target.name
        const changeValue = evt.target.value
        setData((previousValue) => {
            return {
                ...previousValue, [changeField]: changeValue
            }
        })

    }

const  navigate =useNavigate()
    useEffect(() => {

        fetch(`http://localhost:5000/product/${productId}/${vendorId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("failed to fetch the data")
                }
                console.log(res)
                return res.json()
            }).then((result) => {
                console.log(result)
                setData(result)
                // setErweror(null)
            }).catch((error) => {

                console.log(error)
            })
    }, [])

    const price = data.price
    const quantity =data.quantity
    const reg = {
      name: data.name,
      description: data.description,
      price: +price,
      quantity:+quantity
    }
    const onSubmit = (evt) => {
        evt.preventDefault()   
     

        fetch(`http://localhost:5000/product/edit/${productId
    }/${vendorId}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json",
            Authorization:`Bearer ${localStorage.getItem
            ("jwtToken")}`
        },
        body:JSON.stringify(reg)
    }).then((response)=>  response.json()
    ).then((result)=>{
        console.log(result)
        navigate("/")

        toast.success("product has being edited")

    }).catch((error)=>{
        toast.error(error)
    })

    }
    return (
        <div>
            <div className={product.subtext}>
                Edit product
            </div>
            <form onSubmit={onSubmit} className={product.form}>

                <div className={product.text}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={data.name} onChange={HandleChange
                    } />
                </div>

                <div className={product.text}>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="" value={data.description} onChange={HandleChange} />
                </div>
                <div className={product.text}>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" id="" value={data.quantity} onChange={HandleChange} />
                </div>
                <div className={product.text}>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="" value={data.price} onChange={HandleChange} />
                </div>
                <div className={product.submit}>
                    <input type="submit" value="Save product" />
                </div>
            </form>
        </div>
    )
}

export default Editproduct