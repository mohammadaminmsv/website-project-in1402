import React ,{useState , useEffect}from 'react'
import { Link , Outlet } from 'react-router-dom';

const BottomHeader = () => {
    const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 64 ? setStickyClass('fixed top-0 left-0 z-50 ') : setStickyClass('relative');
    }
  };
  return (
    <>
  <div className={`flex flex-row justify-around bg-teal-100 h-10 pt-1 w-full  ${stickyClass} `}>
    <div>
    <Link className='cursor-pointer'  ><span>سبد خرید</span></Link>
   </div>
   <nav className='flex flex-row  md:flex-row-reverse space-x-5 ml-48 ltr sm:flex-col sm:mt-20 '>
   <Link className='cursor-pointer'  to="/"><span className='cursor-pointer text-md ml-5 font-semibold'>خانه </span></Link>
   <Link className='cursor-pointer'  to="/Catalogue"><span className='cursor-pointer text-md font-semibold'>کاتالوگ </span></Link>
   <Link className='cursor-pointer'  to="/Product"><span className='cursor-pointer text-md font-semibold'>محصولات </span></Link>
   <Link className='cursor-pointer'  to="/Profile"><span className='cursor-pointer text-md font-semibold'>پروفایل</span></Link>
   </nav>
   <Outlet />
   
  </div>
    </>
  )
}

export default BottomHeader