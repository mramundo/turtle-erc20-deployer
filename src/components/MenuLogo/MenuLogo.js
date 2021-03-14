import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../Emoji'

const MenuLogo = () => {
    return (
        <div className="hidden sm:block flex-shrink-0 flex items-center">
            <Link to="/">
                <Emoji symbol="🐢" label="turtle" additionalClasses="logo-emoji" />
            </Link>
        </div>
    )
}

export default MenuLogo
