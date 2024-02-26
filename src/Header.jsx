import { Link , Outlet } from 'react-router-dom';
import React from 'react'
import styles from "./Style.Header.module.css"
import Home from './Component/Home';
const Header = () => {
  return (
   <>
   <div className='container flex font-primary items-center bg-headercolor-100 h-[30pt]'>
    <div className='flex w-4/5 ml-10 space-x-5'>
    <Link to="/Login"><span className='cursor-pointer text-xl font-semibold'>وارد شوید</span></Link>
    <Link to="/Signin"><span className='cursor-pointer text-xl font-semibold'>ثبت نام کنید</span></Link>
    </div>

    <nav className='flex w-1/5 md:flex-row-reverse space-x-5 mr-10 ltr sm:flex-col sm:mt-20 '>
      
    <Link to="/"><span className='cursor-pointer text-xl ml-5 font-semibold'>خانه </span></Link>
    <Link to="/Catalogue"><span className='cursor-pointer text-xl font-semibold'>کاتالوگ </span></Link>
    <Link to="/Product"><span className='cursor-pointer text-xl font-semibold'>محصولات </span></Link>
    <Link to="/Profile"><span className='cursor-pointer text-xl font-semibold'>پروفایل</span></Link>

    </nav>
<Outlet />
   </div>
   </>
  )
}

export default Header