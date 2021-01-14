import {GlobalStateType} from "./redux-store";

export const getUsers = (state: GlobalStateType) => {
    return state.usersPage.users;
}

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
