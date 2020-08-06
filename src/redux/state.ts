import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

    /*messagesPage: MessagesPageType*/
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}

/*export type MessagesPageType = {
    messages: Array<MessageType>
    newMessageBody: string
}*/

export type DialogItemType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type  PostType = {
    id: number
    message: string
    likesCount: number
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void

    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispatch: (action: ActionPropsType) => void
}

export type ActionPropsType = {
    message: string
    newText: string
    type: string
    body: string
}


// OOP
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

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}


