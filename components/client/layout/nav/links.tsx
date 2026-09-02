
import Link from 'next/link';
import React from 'react'


const navLinks = [
    {
        label: 'Home',
        path: '/',
        id: 'home'
    },
    {
        label: 'Products',
        path: '/products',
        id: 'products'
    },
    {
        label: 'About',
        path: '/about-us',
        id: 'about-us'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        id: 'contact-us'
    }


]

const NavLinks = () => {
    return (
        <div className="flex items-center gap-2" >
            {
                navLinks.map(({ path, label, id }) => {
                    return (
                        <Link key={id} href={path}>
                            <p className='font-semibold hover:text-teal-500 transition-all duration-300'>{label}</p>
                        </Link>
                    );
                })
            }
        </div >
    )
}

export default NavLinks