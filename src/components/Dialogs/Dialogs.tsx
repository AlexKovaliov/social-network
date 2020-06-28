import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsTypeDialogItem = {
    num:number
    name:string
}

const DialogItem = (props:PropsTypeDialogItem) => {
    let path = "/dialogs/" + props.num;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type PropsTypeMessage = {
    message: string
}

const Message = (props:PropsTypeMessage) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props:PropsTypeDialogItem) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" num={1} />
                <DialogItem name="Andrey" num={2} />
                <DialogItem name="Sveta" num={3} />
                <DialogItem name="Sasha" num={4} />
                <DialogItem name="Victor" num={5} />
                <DialogItem name="Valera" num={6} />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;