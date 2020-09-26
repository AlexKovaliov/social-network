

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UsersInformationType = {
    id: string,
    photos: any,
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}

export type UsersType = {
    users: Array<UsersInformationType>
}

export type ActionType = FollowACType | UnfollowACType | SetUsersACType

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
};

export const usersReducer = (state = initialState, action: ActionType) => {

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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

/*action creators которые пользователь UI будут использовать чтобы создовать action*/
export type FollowACType = { type: typeof FOLLOW, userId: string }           //!!!!to fix any
export type UnfollowACType = { type: typeof UNFOLLOW, userId: string }
export type SetUsersACType = { type: typeof SET_USERS, users: Array<UsersInformationType> }

export const followAC = (userId: any): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: any): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersInformationType>): SetUsersACType => ({type: SET_USERS, users})
