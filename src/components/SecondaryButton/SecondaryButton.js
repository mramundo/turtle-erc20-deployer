import React from 'react'

const SecondaryButton = ({ text, additionalClasses, onClickHandler }) => {
    const onClickDefaultHandler = () => {}

    return (
        <button
            className={
                'inline-flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none ' +
                (additionalClasses ?? '')
            }
            onClick={onClickHandler ?? onClickDefaultHandler}
        >
            {text}
        </button>
    )
}

export default SecondaryButton
