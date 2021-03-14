import React from 'react'

const Button = ({ text, additionalClasses, onClickHandler }) => {
    const onClickDefaultHandler = () => {}
    return (
        <button
            className={
                'items-center px-4 py-2 border border-transparent w-min rounded-full shadow-sm text-white focus:outline-none bg-green-600 hover:bg-green-700 ' +
                (additionalClasses ?? '')
            }
            onClick={onClickHandler ?? onClickDefaultHandler}
        >
            {text}
        </button>
    )
}

export default Button