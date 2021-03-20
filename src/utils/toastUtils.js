import { v4 as uuid } from 'uuid'

export const toastActions = {
    ADD: 'ADD_TOAST',
    REMOVE: 'REMOVE_TOAST',
}

export const toastTypes = {
    INFO: 'INFO',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
}

export const toastPositions = {
    TOP_LEFT: 'TOP_LEFT',
    TOP_RIGHT: 'TOP_RIGHT',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
}

export const toastDimensions = {
    EXTRA_SMALL: 'EXTRA_SMALL',
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
    EXTRA_LARGE: 'EXTRA_LARGE',
}

export const defaultPosition = 'top-4 md:right-4'
export const defaultScreenOffset = 'md:ml-auto'
export const defaultDimension = 'w-full md:w-auto'

export const defaultDelay = 5

export const dispatchToast = (type, message, delay, dispatch) => {
    const toastUuid = uuid()
    const toastDelay = delay ?? defaultDelay

    dispatch({
        type: toastActions.ADD,
        toast: {
            uuid: toastUuid,
            type: type,
            message: message,
        },
    })

    if (toastDelay !== 0) {
        setTimeout(() => {
            dispatch({ type: toastActions.REMOVE, uuid: toastUuid })
        }, toastDelay * 1000)
    }
}

export const dismissToast = (uuid, dispatch) => {
    dispatch({ type: toastActions.REMOVE, uuid: uuid })
}
