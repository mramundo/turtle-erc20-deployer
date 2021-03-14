import React from 'react'
import CustomNavLink from '../CustomNavLink'

const MenuItem = ({ code, href, text }) => {
    return (
        <div key={code} className="px-2 pt-2 pb-3 space-y-1 flex justify-center">
            <CustomNavLink href={href} text={text} />
        </div>
    )
}

export default MenuItem
