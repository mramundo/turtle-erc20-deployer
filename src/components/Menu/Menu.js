import React from 'react'
import MenuLogo from '../MenuLogo'
import MenuItem from '../MenuItem'
import DarkModeToggle from '../DarkModeToggle'
import Web3ModalConnect from '../Web3ModalConnect'

const Menu = ({ menuItems }) => {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 hidden sm:block">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex justify-center sm:justify-start items-center">
                    <MenuLogo />
                    {menuItems.map((menuItem) => {
                        return (
                            <MenuItem
                                key={menuItem.code}
                                code={menuItem.code}
                                href={menuItem.href}
                                text={menuItem.label}
                            />
                        )
                    })}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden sm:block sm:ml-3">
                        <Web3ModalConnect />
                    </div>
                    <div className="hidden sm:block sm:ml-3">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
