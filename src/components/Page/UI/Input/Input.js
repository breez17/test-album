import React from 'react'
/*Stylesheet*/
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || "text";
    const cls = ["Input"];
    const htmlFor = `${inputType} -${Math.random()}`;

    if (isInvalid(props)) {
        cls.push('invalid')
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input id={htmlFor} value={props.value} onChange={props.onChange} type={inputType}
                   className={cls.join(" ")}/>
            {isInvalid(props) ? <span> {props.errorMessage}</span> : null}
        </div>
    )
};

export default Input;