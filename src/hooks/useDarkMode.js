import nightwind from 'nightwind/helper'
import { useEffect, useState } from 'react'

export const THEME_KEY = 'nightwind-mode'
export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
}

export const useDarkMode = () => {
    const userTheme = window.localStorage.getItem(THEME_KEY) ?? THEME.LIGHT
    const [theme, setTheme] = useState(userTheme)
    const colorTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove(colorTheme)
        root.classList.add(theme)
    }, [theme, colorTheme])

    return [
        colorTheme,
        setTheme,
        (colorTheme, setTheme) => {
            setTheme(colorTheme)
            nightwind.toggle()
        },
    ]
}
