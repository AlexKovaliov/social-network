import React from 'react';
import s from './../Dialogs.module.css';


export type MessageType = {
    id: number
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div>
            <div>
                <div>
                    <textarea>Text me</textarea>
                </div>

                <div>
                    <button>Send message</button>
                </div>
            </div>

            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}

export default Message;