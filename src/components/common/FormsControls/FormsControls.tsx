import React from 'react'
import s from './FormsControls.module.css'

const FormControl = ({...input, ...meta, ...child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {...restProps, ...meta, ...child, ...input} = props
    return <FormControl>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props: any) => {
    const {...input, ...meta, ...child, ...restProps} = props
    return <FormControl>
        <input {...input} {...restProps}/>
    </FormControl>
}