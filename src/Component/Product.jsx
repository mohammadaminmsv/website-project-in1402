import React from 'react'
import {ProductInfo} from '../Data/ProductInfo'

const Product = () => {
  return (
    <>
    <div className='container mt-20 '>
     { ProductInfo.map((item , index) => 
      <>
      <div className='' key={index}>
        <h3>{item.name}</h3>
        <img src={item.images.img1} alt='television image' width={300} height={300}></img>
        <img src={item.images.img2} alt='television image' width={300} height={300}></img>
        <div color={item.color.black} className="bg-{}">salam</div>
        <h3>{item.name}</h3>
      </div>
      </>
     )}
    </div>
    </>
  )
}

export default Product