import React from 'react'
import Logo1 from '../img/logo.png'

export default function Info() {
  return (
    <section>
      <div className='container mx-auto h-screen flex flex-col p-6 lg:flex-row lg:mb-0'>
        <div className='mx-auto w-[35%] lg:mx-6 lg:w1/2'><img src={Logo1} alt="" className='rounded-xl lg:top-24 xl:top-0' /></div>
        <div className='flex-col space-y-10 lg:mt-16 lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-right lg:text-6xl'>عنوان</h1>
          <p className=' text-lg text-right text-gray=300 lg:mt-0 lg:mx-0'>متن</p>
          <div className=' flex justify-end w-full space-x-4 lg:justify-end'>
            <a href="#" className='p-4 text-lg rounded-lg border-2 hover:bg-[#fafafa] hover:text-black'>بررسی و خرید</a>
            <a href="#" className='p-4 text-lg text-black bg-[#fafafa] rounded-lg'>مشاهده محصولات</a>
            </div>
        </div>
      </div>
    </section>
  )
}
