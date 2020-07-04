import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsTypeDialogItem = {
    id: number
    name: string
}

const DialogItem = (props: PropsTypeDialogItem) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type PropsTypeMessage = {
    message: string
}


const Message = (props: PropsTypeMessage) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props: PropsTypeDialogItem) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Welcome"},
        {id: 6, message: "Buy"}
    ]

    let messagesElement = messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;