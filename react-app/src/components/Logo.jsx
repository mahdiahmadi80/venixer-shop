import React from 'react'
import Logo1 from '../img/logo.png'

export default function Logo() {
    return (
        <div className='flex'>
            <img className='w-[5%]' src={Logo1} alt="" />
            <span className='tracking-[.15rem] pt-[.6rem] pl-2 font-bold text-lg uppercase' >Venixer Shop</span>
        </div>
    )
}
