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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
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
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer (рус. наблюдатель) - это патерн
    },
}



