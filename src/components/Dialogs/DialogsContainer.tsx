import React from 'react';
import {DialogItemType, MessageType, StoreType} from "../../redux/store";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
    SendMessageActionCreatorType,
    UpdateNewMessageBodyActionCreatorType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: /*ActionPropsType*/ | SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType) => void
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}
    />)
}
// контейнерная компонента всего лишь обвёртка над презентационной компонентой
export default DialogsContainer;