import React from 'react'

const Button = ( { variant, type, label, onClick  }) => {
    return (
        <>
            <button type={ type || 'button' } onClick={onClick} class={'button button-' + (variant || 'primary' ) }> { label }</button>
        </>
    )
}

export default Button