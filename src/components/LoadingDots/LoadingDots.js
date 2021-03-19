import React, { useState, useEffect, useMemo } from 'react'

const LoadingDots = () => {
    const durantion = 250
    const pattern = useMemo(() => ['.', '..', '...'], [])

    const [text, setText] = useState(pattern[0])
    const [textIndex, setTextIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setText(pattern[textIndex])
            setTextIndex(textIndex < pattern.length - 1 ? textIndex + 1 : 0)
        }, durantion)

        return () => clearInterval(interval)
    }, [pattern, textIndex])

    return <span className="loading-dots">{text}</span>
}

export default LoadingDots
