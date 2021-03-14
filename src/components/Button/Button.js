import React from 'react'

const Button = ({ text, additionalClasses, onClickHandler }) => {
    const onClickDefaultHandler = () => {}
    return (
        <button
            className={
                'inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-white focus:outline-none bg-green-600 hover:bg-green-700 ' +
                (additionalClasses ?? '')
            }
            onClick={onClickHandler ?? onClickDefaultHandler}
        >
            {text}
        </button>
    )
}

export default Button
