import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className='flex justify-between items-center border-b px-16 py-2'>
            <Image src="/logo/transparent.png" alt="logo" width={150} height={150} />
            <nav> <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul></nav>
            <button className='bg-black font-extralight py-1 px-5 rounded-full text-white'>Get Quote</button>
        </header>)
}

export default Header