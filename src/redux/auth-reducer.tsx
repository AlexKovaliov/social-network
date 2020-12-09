import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA'


export type AuthType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type ActionType = SetUserDataACType


export let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

/*action creators которые пользователь UI будут использовать чтобы создовать action*/
export type SetUserDataACType = { type: typeof SET_USER_DATA, payload: AuthType }

export const setUserDataAC = (userId: string | null,
                              email: string | null,
                              login: string | null,
                              isAuth: boolean): SetUserDataACType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data.login
                dispatch(setUserDataAC(id, email, login, true))
            }
        })
}
//!!!!!fix
export const login = (email: string, password: string, rememberMe: false) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
        })
}
