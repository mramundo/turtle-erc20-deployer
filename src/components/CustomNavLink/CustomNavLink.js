import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ href, text }) => {
    return (
        <NavLink exact activeClassName="underline" className="hover:underline" to={href}>
            {text}
        </NavLink>
    )
}

export default CustomNavLink
