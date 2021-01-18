import {GlobalStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: GlobalStateType) => {
    return state.usersPage.users;
}

export const getUsersSuper = (state: GlobalStateType) => {
    state.usersPage.users.filter(u => true)
};

export const getUsersSuperSelector = createSelector(getUsers,(users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: GlobalStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: GlobalStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: GlobalStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: GlobalStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: GlobalStateType) => {
    return state.usersPage.followingInProgress;
}
