import React from 'react'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <>
    <div className='my-10'>
    <Slider/>
    </div>
    <div className='flex flex-row justify-center divide-x-2 divide-gray-300'>
        <div className='flex flex-col-reverse px-16 text-center'><p>ارسال سریع و فوری برای محدوده شهر تهران</p><strong>ارسال فوری</strong></div>
        <div className='flex flex-col-reverse px-16 text-center'><p>کالای معتبر و مطمئن</p><strong>ضمانت اصالت کالا</strong></div>
        <div className='flex flex-col-reverse px-16 text-center'><p>پس از ثبت سفارش</p><strong>تحویل درب محل</strong></div>
        <div className='flex flex-col-reverse px-16 text-center'><p>تا ۷ روز پس از تحویل سفارش</p><strong>ضمانت ارجاع و تعویض</strong></div>
    </div>
    </>
  )
}

export default Home