import {ActionPropsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    newPostText: "it"
};


const profileReducer = (state = initialState, action: ActionPropsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }; // спред оператор
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }
}

// action creators которые пользователь UI будут использовать чтобы создовать action
export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST})

export type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;