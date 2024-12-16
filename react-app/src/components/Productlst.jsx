import React from 'react'
import Logo1 from '../img/logo.png'

export default function Productlst() {
    return (
        <div className='py-32'>
            <div className='relative flex flex-col items-center max-w-7xl mx-auto space-y-10 px-10 md:p-6 md:space-x-6 md:flex-row'>
                <div className='flex flex-col w-full text-center rounded-lg md:w-1/3 bg-[#1a1c1e] '>
                    <div className='flex justify-center'>
                        <img src={Logo1} alt="" className='rounded-t-lg'/>
                    </div>
                    <h5 className='pt-6 mb-2 text-2xl font-bold '>هدفون</h5>
                    <div className='flex justify-center gap-1 text-gray-300 text-lg'>
                        <p>500</p>
                        <p>TM</p>
                    </div>
                    <div className='px-6 pt-8 mb-8'>
                        <a href="" className='py-3 px-4 text-white bg-[#343434] text-lg rounded-lg hover:bg-white hover:text-black' >افزودن به سبد خرید  </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
