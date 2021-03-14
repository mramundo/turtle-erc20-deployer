import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../Emoji'

const MobileMenuLogo = () => {
    return (
        <div className="sm:hidden flex-shrink-0 flex items-center w-min">
            <Link to="/">
                <Emoji symbol="🐢" label="turtle" additionalClasses="logo-emoji" />
            </Link>
        </div>
    )
}

export default MobileMenuLogo
