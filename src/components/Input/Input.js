import React from 'react'

const Input = ({ label, field, type, span, width }) => {
    return (
        <div className={`col-span-${span ?? 12}`}>
            <label className="block" htmlFor={field}>
                {label}
            </label>
            <input
                className={`px-2 py-1 block w-${
                    width ?? 'full'
                } rounded-md border focus:outline-none bg-white border-gray-300 hover:border-green-600`}
                type={type}
                name={field}
                id={field}
            ></input>
        </div>
    )
}

export default Input
