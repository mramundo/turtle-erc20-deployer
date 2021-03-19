import React from 'react'

const Input = ({ label, field, type, value, span, width, mobileWidth, onChangeHandler }) => {
    const onChangeDefaultHandler = () => {}

    return (
        <div className={`col-span-${span ?? 12} mb-4`}>
            <label className="block" htmlFor={field}>
                {label}
            </label>
            <input
                id={field}
                name={field}
                type={type}
                value={value}
                onChange={onChangeHandler ?? onChangeDefaultHandler}
                className={`px-4 py-2 block width-full ${width ? 'sm:w-' + width : 'width-full'} ${
                    mobileWidth ? 'w-' + mobileWidth : 'width-full'
                } rounded-md border focus:outline-none bg-white border-gray-300 hover:border-green-600`}
            ></input>
        </div>
    )
}

export default Input
