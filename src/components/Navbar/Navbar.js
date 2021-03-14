import React from 'react'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'

const Navbar = () => {
    const menuItems = [
        {
            code: 'home',
            label: 'Home',
            href: '/',
        },
        {
            code: 'info',
            label: 'Info',
            href: '/info',
        },
        {
            code: 'about',
            label: 'About',
            href: '/about',
        },
    ]

    return (
        <nav>
            <Menu menuItems={menuItems} />
            <MobileMenu menuItems={menuItems} />
        </nav>
    )
}

export default Navbar
