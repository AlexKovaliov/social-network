import {DialogsPageType, ActionPropsType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

/*type DialogsReducerType = {
    state: DialogsPageType & MessagesPageType
    action: ActionPropsType
}*/

const dialogsReduser =
    (state: DialogsPageType, action: ActionPropsType) => {
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = "";
                state.messages.push({id: 6, message: body});
                return state;
            default:
                return state;
        }
    }
// action creators которые пользователь UI будут использовать чтобы создовать action
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReduser;