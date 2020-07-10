import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message, {propsTypeMessage} from "./Message/Message";


type dialogsType = {
    dialogs: Array<propsTypeDialogs>
    messages: Array<propsTypeMessage>
}

export type propsTypeDialogs = {
    id: number
    name: string
}



const Dialogs = (props: dialogsType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement  = props.messages.map(m => <Message message={m.message}/>);


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