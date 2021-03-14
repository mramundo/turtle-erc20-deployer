import React from 'react'
import MobileMenuItem from '../MobileMenuItem'

const MobileMenu = ({ menuItems }) => {
    return (
        <div className="sm:hidden" id="mobile-menu">
            {menuItems.map((menuItem) => {
                return (
                    <MobileMenuItem
                        key={menuItem.code}
                        code={menuItem.code}
                        href={menuItem.href}
                        text={menuItem.label}
                    />
                )
            })}
        </div>
    )
}

export default MobileMenu
