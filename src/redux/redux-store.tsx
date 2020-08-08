import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import {DialogsPageType, ProfilePageType} from "./store";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export let store = createStore(reducers);

