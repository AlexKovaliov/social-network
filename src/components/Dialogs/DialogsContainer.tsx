import React from 'react';
import {DialogsPageType, StoreType} from "../../redux/store";
import {
    sendMessageActionCreator,
    updateNewMessageBodyCreator,
    SendMessageActionCreatorType,
    UpdateNewMessageBodyActionCreatorType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";


type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    store: StoreType
    dispatch: (action: /*ActionPropsType*/ | SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType) => void
}


let mapStateToProps = (state: GlobalStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: UpdateNewMessageBodyActionCreatorType | SendMessageActionCreatorType) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
    }
}

const DialogsContainer = connect<any, any, any, any>(mapStateToProps, mapDispatchToProps)(Dialogs);

/*контейнерная компонента всего лишь обвёртка над презентационной компонентой*/
export default DialogsContainer;