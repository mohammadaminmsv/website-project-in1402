import React from 'react'
import styles from "../theme/Style.Footer.module.css"
import {Link , Outlet} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className='bottom-0 relative h-[200pt] flex flex-row justify-between mt-10 px-5 py-3 bg-primaryBlue-300' id='footer'>
     
     <div className='w-3/5 ml-32 text-center items-center flex flex-col'>
      <span className='font-bold text-xl'>امین موسوی</span> <br/>
      <span className="-mt-4">برنامه نویس و توسعه دهنده </span>
      <img src='IMG_9995.PNG' alt="amin mousavi logo" className='h-3/5 w-2/5 rounded-[40pt] mt-3' />   
      </div>
     <div className='flex flex-col text-right space-y-3 w-1/5'>
        <Link>تماس با ما</Link>
      <Link>درباره با ما</Link>
      </div>

      
      
       
    </footer>
    </>
  )
  }

export default Footer