import React from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem.js'
export default function Menu() {
    return (
        <nav className='container mx-auto relative p-6 '>
            {/* logo */}
            <div className='flex items-center justify-between space-x-20 my-6'>
                <Logo />

                {/* items */}
                 <MenuItem/>
            </div>
        </nav>
    )
}


