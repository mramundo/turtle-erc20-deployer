import { createContext, useReducer, useContext } from 'react'
import { toastActions } from '../utils/toastUtils'

const ToastStateContext = createContext({ toasts: [] })
const ToastDispatchContext = createContext(null)

const ToastReducer = (state, action) => {
    switch (action.type) {
        case toastActions.ADD: {
            return {
                ...state,
                toasts: [...state.toasts, action.toast],
            }
        }
        case toastActions.REMOVE: {
            return {
                ...state,
                toasts: state.toasts.filter((toast) => toast.uuid !== action.uuid),
            }
        }
        default: {
            console.log('Toast action not found!')
        }
    }
}

export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ToastReducer, { toasts: [] })

    return (
        <ToastStateContext.Provider value={state}>
            <ToastDispatchContext.Provider value={dispatch}>{children}</ToastDispatchContext.Provider>
        </ToastStateContext.Provider>
    )
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)
