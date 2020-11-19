import {
    AddPostActionCreatorType,
    ProfilePageType,
    UpdateNewPostTextActionCreatorType,
    SetUserProfileType
} from "./profile-reducer";
import {SendMessageActionCreatorType} from "./dialogs-reducer";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogsItem";
import { MessageType } from "../components/Dialogs/Message/Message";


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType


    /*messagesPage: MessagesPageType*/
}


export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMassageBody: string

}

/*export type MessagesPageType = {
    messages: Array<MessageType>
    newMessageBody: string
}*/




export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void

    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispatch: (action: ActionPropsType) => void
}

export type ActionPropsType = SendMessageActionCreatorType
    | AddPostActionCreatorType | UpdateNewPostTextActionCreatorType | SetUserProfileType


// OOP
/*
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 23},
            ],
            newPostText: "it"
        },
        dialogsPage: {
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
        },
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer (рус. наблюдатель) - это патерн
    },

    // изменяет state через action
    dispatch(action) {           //action объект который описывает какое действие совершить
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}*/
