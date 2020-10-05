import React from 'react';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {
    ActionType,
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowAC,
    UsersInformationType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import { Preloader } from '../common/Preloader/Preloader';

type UsersContainerPropsType = {
    setUsers: (users: Array<UsersInformationType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersInformationType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    isFetching: boolean
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}")
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}")
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? Preloader : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

// getting all state of our app
let mapStateToProps = (state: GlobalStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)