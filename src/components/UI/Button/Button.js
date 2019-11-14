import React from 'react'
/*Stylesheet*/
import './Button.css'

const Button = props => {
    const cls = [
        "Button", [props.type]
    ];
    return(
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
};

export default Button;