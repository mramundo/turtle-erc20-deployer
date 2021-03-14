import React from 'react'

const Emoji = ({ label, symbol, additionalClasses }) => {
    return (
        <span
            className={'emoji ' + (additionalClasses ?? '')}
            role="img"
            aria-label={label ? label : ''}
            aria-hidden={label ? 'false' : 'true'}
        >
            {symbol}
        </span>
    )
}

export default Emoji
