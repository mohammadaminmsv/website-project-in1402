import React from 'react'
import styles from "./Style.Header.module.css"
const Header = () => {
  return (
   <>
   <div className='container flex font-primary items-center bg-headercolor-100 h-[30pt]'>
    <div className='flex w-4/5 ml-10 space-x-5'>
    <span className='cursor-pointer text-xl font-semibold'>وارد شوید</span>
    <span className='cursor-pointer text-xl font-semibold'>ثبت نام کنید</span>
    </div>
    <div className='flex w-1/5  md:flex-row-reverse space-x-5 mr-10 ltr sm:flex-col sm:mt-20'>
    <span className='cursor-pointer text-xl ml-5 font-semibold'>خانه </span>
    <span className='cursor-pointer text-xl font-semibold'>کاتالوگ </span>
    <a href='#' className='cursor-pointer text-xl font-semibold'>محصولات </a>
    <span className='cursor-pointer text-xl font-semibold'>پروفایل</span>

    </div>

   
   </div>
   </>
  )
}

export default Header