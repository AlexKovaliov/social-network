import {DialogsPageType, ActionPropsType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

/*type DialogsReducerType = {
    state: DialogsPageType & MessagesPageType
    action: ActionPropsType
}*/

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Welcome"},
        {id: 6, message: "Buy"},
    ],
    newMessageBody: ""
};

const dialogsReducer =
    (state = initialState, action: ActionPropsType) => {

        switch (action.type) {

            case UPDATE_NEW_MESSAGE_BODY:
                return {
                    ...state,
                    newMessageBody: action.body
                };

            case SEND_MESSAGE:
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: "",
                    messages: [...state.messages, {id: 6, message: body}]
                };

            default:
                return state;
        }
    }
/* action creators которые пользователь UI будут использовать чтобы создовать action*/
export type UpdateNewMessageBodyActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionCreatorType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
}
export const sendMessageActionCreator = (): SendMessageActionCreatorType => ({type: SEND_MESSAGE})

export default dialogsReducer;