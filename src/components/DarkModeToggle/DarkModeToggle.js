import React from 'react'
import SecondaryButton from '../SecondaryButton'
import Emoji from '../Emoji'
import { THEME, useDarkMode } from '../../hooks/useDarkMode'

const DarkModeToggle = () => {
    const [colorTheme, setTheme, toggleDarkMode] = useDarkMode()
    const text = colorTheme === THEME.LIGHT ? <Emoji symbol="🌞" label="sun" /> : <Emoji symbol="🌜" label="moon" />

    return (
        <SecondaryButton
            text={text}
            additionalClasses="dark-mode-toggle"
            onClickHandler={() => toggleDarkMode(colorTheme, setTheme)}
        ></SecondaryButton>
    )
}

export default DarkModeToggle
