import React from 'react'

const Alert = ({ message, variant, onClose }) => {
    return (
        <div className={'alert alert-' + (variant || 'primary' )}>
            { message }
            <button type="button" onClick={onClose} class="alert-close">X</button>
        </div>
    )
}

export default Alert