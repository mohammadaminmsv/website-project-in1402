import React from 'react'

const ShowProduct = ({image}) => {
  return (
    <>
    <div className='comtainer'>
        <img src={image} className='w-[50pt] h-[100pt]'/>
      
    </div>
    </>
  )
}

export default ShowProduct