import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UsersInformationType = {
    id: string,
    photos: any,
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}
//totalCount/pageSize
export type UsersType = {
    users: Array<UsersInformationType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>
}

export type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetUsersTotalCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingACType

export let initialState: UsersType = {
    users: [
        {
            id: "1",
            photos: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
            followed: false,
            name: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: "2",
            photos: "https://vignette.wikia.nocookie.net/zlodei/images/0/02/485843-1.jpg/revision/latest?cb=20200404093008&path-prefix=ru",
            followed: true,
            name: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Vitebsk', country: 'Belarus'}
        },
        {
            id: "3",
            photos: "https://lh3.googleusercontent.com/proxy/hcKW7l9IYlrlyhTNnrbJBqYdOYfFENoVSdSvHlrxrNsuQpm23rxw7ZdZ5ygTWGmoqfKVzuyIq5yVFyf84OGIS4A3GfgVHHoFn2tAnRLRZErWdFVz",
            followed: false,
            name: 'Sveta',
            status: 'And me',
            location: {city: 'Mogilev', country: 'Belarus'}
        },
        {
            id: "4",
            photos: "https://sobesednik.ru/storage/posts/May2020/tMdmGTA87tWemRUNtmBE.jpg",
            followed: true,
            name: 'Katya',
            status: 'yo',
            location: {city: 'Grodno', country: 'Belarus'}
        },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

/*action creators которые пользователь UI будут использовать чтобы создовать action*/
export type FollowACType = { type: typeof FOLLOW, userId: string }           //!!!!to fix any
export type UnfollowACType = { type: typeof UNFOLLOW, userId: string }
export type SetUsersACType = { type: typeof SET_USERS, users: Array<UsersInformationType> }
export type SetCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export type SetUsersTotalCountACType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export type ToggleIsFetchingACType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export type ToggleFollowingACType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: string }

export const followSuccess = (userId: string): FollowACType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: string): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersInformationType>): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountACType => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: string): ToggleFollowingACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
})

export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))
    })
}


export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}