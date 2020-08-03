export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    messagesPage: MessagesPageType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}



export type DialogsPageType = {
    dialogs: Array<DialogItemType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
    newMessageBody: string
}

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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


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
            ]
        },
        messagesPage: {
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = "";
            this._state.messagesPage.messages.push({id: 6, message: body});
            this._callSubscriber();
        }
    }
}
  // action creators которые пользователь UI будут использовать чтобы создовать action
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
