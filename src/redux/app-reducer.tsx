import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitializedSuccessType = {
    type: 'INITIALIZED_SUCCESS'
}

type ActionsType = InitializedSuccessType;

export type AuthType = {
    initialized: boolean
}

export let initialState: AuthType = {
    initialized: false
};

export const appReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

/*action creators которые пользователь UI будут использовать чтобы создовать action*/
/*export type SetUserDataACType = { type: typeof SET_USER_DATA, payload: AuthType }*/

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}