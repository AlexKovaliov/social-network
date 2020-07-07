import React from 'react';
import s from './../Dialogs.module.css';


type PropsTypeMessage = {
    message: string
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;