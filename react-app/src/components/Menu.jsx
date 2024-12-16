import React from 'react'
import Logo from './Logo.jsx'
import MenuItem from './MenuItem.jsx'
export default function Menu() {
    return (
        <nav className='container mx-auto relative p-6 '>
            <div className='flex items-center justify-between space-x-20 my-6'>
                {/* logo */}
                <Logo />
                {/* items */}
                <MenuItem />
            </div>
        </nav>
        
    )
}


