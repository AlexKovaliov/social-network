import React from "react";
import {Users} from './Users'
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {
    ActionType,
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
    UsersInformationType
} from "../../redux/users-reducer";


// getting all state of our app
let mapStateToProps = (state: GlobalStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// function for callbacks //!!!!!!!!
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersInformationType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
