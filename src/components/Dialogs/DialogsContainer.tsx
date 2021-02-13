import React from 'react';
import {DialogsPageType, StoreType} from "../../redux/store";
import {
    sendMessageActionCreator,
    SendMessageActionCreatorType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    store: StoreType
    dispatch: (action: /*ActionPropsType*/ | SendMessageActionCreatorType) => void
}


let mapStateToProps = (state: GlobalStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: (action: SendMessageActionCreatorType) => void) => {
    return {
        sendMessage: (newMassageBody: string) => {
            dispatch(sendMessageActionCreator(newMassageBody))
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;

/*export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/

/*контейнерная компонента всего лишь обвёртка над презентационной компонентой*/