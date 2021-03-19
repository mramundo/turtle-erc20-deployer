import React, { useState } from 'react'

const Input = ({
    label,
    field,
    type,
    value,
    required,
    span,
    width,
    mobileWidth,
    onChangeHandler,
    onBlurHandler,
    onKeyUpHandler,
}) => {
    const onChangeDefaultHandler = () => {}
    const onValidateDefaultHandler = () => {
        setInvalid(required && (!value || value.trim().length === 0))
    }

    const [invalid, setInvalid] = useState(false)

    return (
        <div className={`col-span-${span ?? 12} mb-4`}>
            <label className={`${invalid && 'text-red-500'} block`} htmlFor={field}>
                {label}
            </label>
            <input
                id={field}
                name={field}
                type={type}
                value={value}
                onChange={onChangeHandler ?? onChangeDefaultHandler}
                onBlur={onBlurHandler ?? onValidateDefaultHandler}
                onKeyUp={onKeyUpHandler ?? onValidateDefaultHandler}
                className={`px-4 py-2 block width-full ${width ? 'sm:w-' + width : 'width-full'} ${
                    mobileWidth ? 'w-' + mobileWidth : 'width-full'
                } rounded-md border focus:outline-none ${invalid && 'ring-1 ring-red-500'} bg-white border-gray-300 ${
                    invalid ? 'border-red-500' : 'border-gray-300 hover:border-green-600'
                }`}
            ></input>
        </div>
    )
}

export default Input
