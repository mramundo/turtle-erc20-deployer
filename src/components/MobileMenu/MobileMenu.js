import React, { useState } from 'react'
import MobileMenuLink from '../MobileMenuLink'
import MobileMenuItem from '../MobileMenuItem'
import Web3ModalConnect from '../Web3ModalConnect'
import DarkModeToggle from '../DarkModeToggle'

const MobileMenu = ({ menuItems }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

    return (
        <div className="sm:hidden" id="mobile-menu">
            <MobileMenuLink href={'#'} text={'Menu'} onClickHandler={toggleMobileMenu} />
            {mobileMenuOpen &&
                menuItems.map((menuItem) => {
                    return (
                        <MobileMenuItem
                            key={menuItem.code}
                            code={menuItem.code}
                            href={menuItem.href}
                            text={menuItem.label}
                        />
                    )
                })}
            {mobileMenuOpen && (
                <div>
                    <div className="px-2 pt-2 pb-3 space-y-1 flex justify-center">
                        <Web3ModalConnect />
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 flex justify-center">
                        <DarkModeToggle />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
