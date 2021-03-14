import React from 'react'

const Form = ({ action, method, content }) => {
    return (
        <form action={action} method={method ?? 'GET'}>
            {content}
        </form>
    )
}

export default Form
