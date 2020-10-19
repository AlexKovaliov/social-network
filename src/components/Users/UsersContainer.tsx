import React from 'react';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching,
    unfollow,
    UsersInformationType, toggleFollowingProgress
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";


type UsersContainerPropsType = {
    setUsers: (users: Array<UsersInformationType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersInformationType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    isFetching: boolean,
    toggleFollowingProgress: (isFetching: boolean, id: string) => void,
    followingInProgress: []
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
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
        followingProgress: state.usersPage.followingInProgress
    }
}

// function for callbacks //!!!!!!!!
/*let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UsersInformationType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress,
        followingInProgress
    }
)(UsersContainer)