import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


export type AuthType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean
}

export type ActionType = SetUserDataACType


export let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

export const authReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

/*action creators которые пользователь UI будут использовать чтобы создовать action*/
export type SetUserDataACType = { type: typeof SET_USER_DATA, data: AuthType }

export const setUserDataAC = (userId: string | null,
                              email: string | null,
                              login: string | null,
                              isFetching: boolean, isAuth: boolean): SetUserDataACType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isFetching, isAuth}
})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isFetching, isAuth} = response.data.data.login
                dispatch(setUserDataAC(id, email, login, isFetching, isAuth))
            }
        })
}
