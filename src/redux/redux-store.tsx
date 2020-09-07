import {combineReducers, createStore} from "redux";
import profileReducer, { ProfilePageType } from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import {DialogsPageType} from "./store";
import {usersReducer, UsersType} from "./users-reducer";


export type GlobalStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);

