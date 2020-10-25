import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfilePageType} from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import {DialogsPageType} from "./store";
import {usersReducer, UsersType} from "./users-reducer";
import {authReducer, AuthType} from "./auth-reducer";
import thunkMiddleware from 'react-redux'

export type GlobalStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersType
    auth: AuthType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
