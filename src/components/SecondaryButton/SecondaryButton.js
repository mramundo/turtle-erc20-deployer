import React from 'react'

const SecondaryButton = ({ text, disabled, additionalClasses, onClickHandler }) => {
    const onClickDefaultHandler = () => {}

    return (
        <button
            className={
                'items-center px-4 py-2 border border-gray-300 w-min rounded-full shadow-sm disabled:opacity-50 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none ' +
                (additionalClasses ?? '')
            }
            disabled={disabled ?? false}
            onClick={onClickHandler ?? onClickDefaultHandler}
        >
            {text}
        </button>
    )
}

export default SecondaryButton
