import React from 'react'
import CustomNavLink from '../CustomNavLink'

const MenuItem = ({ code, href, text }) => {
    return (
        <div key={code} className="hidden sm:block sm:ml-6 block">
            <div className="flex space-x-4">
                <CustomNavLink href={href} text={text} />
            </div>
        </div>
    )
}

export default MenuItem
