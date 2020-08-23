import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message, {} from "./Message/Message";
import {DialogItemType, MessageType, DialogsPageType} from "../../redux/store";


type PropsType = {
    /* store: StoreType*/
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}


const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElement = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(onSendMessageClick) => {
                        }}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;