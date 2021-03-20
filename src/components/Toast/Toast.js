import React from 'react'
import ToastIcons from '../ToastIcons'
import { useToast } from '../../hooks/useToast'
import { toastTypes } from '../../utils/toastUtils'

/**
 * PostCSS
 *
 * bg-green-100 border-green-400 text-green-800 text-green-500 hover:bg-green-200
 *
 * bg-red-100 border-red-400 text-red-800 text-red-500 hover:bg-red-200
 *
 * bg-yellow-100 border-yellow-400 text-yellow-800 text-yellow-500 hover:bg-yellow-200
 *
 * bg-indigo-100 border-indigo-400 text-indigo-800 text-indigo-500 hover:bg-indigo-200
 *
 * bg-purple-100 border-purple-400 text-purple-800 text-purple-500 hover:bg-purple-200
 */
const Toast = ({ uuid, type, message }) => {
    const { toast } = useToast()
    const toastColor =
        type === toastTypes.SUCCESS
            ? 'green'
            : type === toastTypes.ERROR
            ? 'red'
            : type === toastTypes.WARNING
            ? 'yellow'
            : type === toastTypes.INFO
            ? 'indigo'
            : 'purple'
    const toastIcon =
        type === toastTypes.SUCCESS ? (
            <ToastIcons.SUCCESS />
        ) : type === toastTypes.ERROR ? (
            <ToastIcons.ERROR />
        ) : type === toastTypes.WARNING ? (
            <ToastIcons.WARNING />
        ) : type === toastTypes.INFO ? (
            <ToastIcons.INFO />
        ) : (
            <ToastIcons.UNKNOWN />
        )
    const dismissHandler = (uuid) => toast.dismiss(uuid)

    return (
        <div className={`rounded-md bg-${toastColor}-100 border-2 border-${toastColor}-400 p-4 m-3`}>
            <div className="flex">
                <div className="flex-shrink-0">{toastIcon}</div>
                <div className="ml-3">
                    <p className={`text-sm font-medium text-${toastColor}-800`}>{message}</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            className={`inline-flex bg-${toastColor}-100 rounded-md p-1.5 text-${toastColor}-500 hover:bg-${toastColor}-200 focus:outline-none`}
                            onClick={() => dismissHandler(uuid)}
                        >
                            {<ToastIcons.DISMISS />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toast
