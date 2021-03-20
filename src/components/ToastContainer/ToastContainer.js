import React from 'react'
import Toast from '../Toast'
import { useToastStateContext } from '../../context/ToastContext'
import { toastPositions, defaultPosition, defaultScreenOffset, defaultDimension } from '../../utils/toastUtils'

const ToastContainer = ({ position }) => {
    const { toasts } = useToastStateContext()
    const toastPosition =
        position === toastPositions.TOP_LEFT
            ? 'top-4 md:left-4'
            : position === toastPositions.TOP_RIGHT
            ? 'top-4 md:right-4'
            : position === toastPositions.BOTTOM_LEFT
            ? 'bottom-4 md:left-4'
            : position === toastPositions.BOTTOM_RIGHT
            ? 'bottom-4 md:right-4'
            : defaultPosition
    const toastScreenOffset =
        position === toastPositions.TOP_LEFT || position === toastPositions.BOTTOM_LEFT
            ? 'md:mr-auto'
            : position === toastPositions.TOP_RIGHT || position === toastPositions.BOTTOM_RIGHT
            ? 'md:ml-auto'
            : defaultScreenOffset
    const toastDimension = defaultDimension

    return (
        <div className={`absolute ${toastPosition} ${toastDimension} z-50`}>
            <div className={`${toastScreenOffset}`}>
                {toasts.map((toast) => (
                    <Toast uuid={toast.uuid} key={toast.uuid} type={toast.type} message={toast.message} />
                ))}
            </div>
        </div>
    )
}

export default ToastContainer
