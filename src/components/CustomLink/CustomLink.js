import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({ href, text }) => {
    return (
        <Link className="no-underline hover:underline" to={href}>
            {text}
        </Link>
    )
}

export default CustomLink
