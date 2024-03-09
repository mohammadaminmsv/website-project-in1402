import React, { useEffect, useState } from 'react'
import {ProductInfo} from '../Data/ProductInfo'
import 'react-slideshow-image/dist/styles.css'
import ShowProduct from '../Components/ShowProduct'


const Product = () => {
  const [product , setProduct] = useState([])
  const [state , setState] = useState("ali")

  useEffect(()=>{
    async function data() {
      const data = await fetch(`https://fakestoreapi.com/products`)
      const json = await data.json()
      setProduct(json)
    }
   data()
  },[])
  
  return (
    <>
    <div className='mt-20 grid grid-cols-3  w-full space-x-5'>
      {product.map((item)=>(
        <>
        
          <div className='border border-black'>
          <h1 className='w-32'>{item.title}</h1>
          <ShowProduct image={item.image} />
          <h1>{item.price}</h1>
          <h1>{item.category}</h1>
          <h1>{item.rating.rate}</h1>
          <h1>{item.rating.count}</h1>
       </div>
       
        </>
      ))}
    </div>
    </>
  )
}

export default Product