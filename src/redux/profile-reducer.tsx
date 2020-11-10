import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {ProfilePropsType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {usersAPI, profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'


export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: any /// need to fix
    status: string
}

export type ProfileActionType = AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | SetUserProfileType
    | SetStatusCreatorType

export let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    newPostText: "it",
    profile: {} as ProfilePropsType,
    status: ''
};


const profileReducer = (state = initialState, action: ProfileActionType): ProfilePageType => {
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
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any /// need to fix
}
export type SetStatusCreatorType = {
    type: typeof SET_STATUS
    status: string
}


/*action creators которые пользователь UI будут использовать чтобы создовать action*/

export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile: any): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status: string): SetStatusCreatorType => ({type: SET_STATUS, status})

// thunks
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(status)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfile(response.data))
            }
        })
}


export default profileReducer;