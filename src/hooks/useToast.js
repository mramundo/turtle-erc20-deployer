import { useToastDispatchContext } from '../context/ToastContext'
import { dispatchToast, dismissToast, toastTypes } from '../utils/toastUtils'

export const useToast = () => {
    const dispatch = useToastDispatchContext()
    const toast = {
        info: (message, delay) => {
            dispatchToast(toastTypes.INFO, message, delay, dispatch)
        },
        warning: (message, delay) => {
            dispatchToast(toastTypes.WARNING, message, delay, dispatch)
        },
        error: (message, delay) => {
            dispatchToast(toastTypes.ERROR, message, delay, dispatch)
        },
        success: (message, delay) => {
            dispatchToast(toastTypes.SUCCESS, message, delay, dispatch)
        },
        dismiss: (uuid) => {
            dismissToast(uuid, dispatch)
        },
    }

    return { toast: toast }
}
