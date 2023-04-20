import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm
        font-mono'>
            <Link to="/" className='pl-8'>LOGO</Link>
            <div className='px-4 cursor-pointer md:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                <Link className='px-4' to='/'>Home</Link>
                <Link className='px-4' to='/about'>About</Link>
                <Link className='px-4' to='/menu'>Menu</Link>
                <Link className='px-4' to='/contact'>Contact</Link>
            </div>



        </nav>
    )
}

export default Navbar 