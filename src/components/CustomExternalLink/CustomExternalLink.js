import React from 'react'

const CustomExternalLink = ({ href, text }) => {
    return (
        <a className="no-underline hover:underline" href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    )
}

export default CustomExternalLink
