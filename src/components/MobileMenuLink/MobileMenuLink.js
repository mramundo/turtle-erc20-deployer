import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenuLogo from '../MobileMenuLogo'

const MobileMenuLink = ({ href, text, onClickHandler }) => {
    const onClickDefaultHandler = () => {}
    return (
        <div className="px-2 pt-2 pb-3 space-y-1 items-center grid grid-cols-3">
            <MobileMenuLogo />
            <div className="flex justify-center items-center">
                <Link
                    className="no-underline hover:underline"
                    to={href}
                    onClick={onClickHandler ?? onClickDefaultHandler}
                >
                    {text}
                </Link>
            </div>
        </div>
    )
}

export default MobileMenuLink
