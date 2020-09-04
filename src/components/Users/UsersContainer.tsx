import React from "react";
import {Users} from './Users'
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {ActionType, followAC, setUsersAC, unfollowAC, UsersInformationType} from "../../redux/users-reducer";


// getting all state of our app
let mapStateToProps = (state: GlobalStateType) => {
    return {
        users: state.usersPage.users
    }
}

// function for callbacks //!!!!!!!! fix userId: any
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersInformationType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
