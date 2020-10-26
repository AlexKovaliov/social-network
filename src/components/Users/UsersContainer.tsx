import React from 'react';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    UsersInformationType, toggleFollowingProgress, getUsers
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    users: Array<UsersInformationType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>
}

type MapsDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void

}


type UsersContainerPropsType = MapsDispatchPropsType & MapStateToPropsType

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// getting all state of our app
let mapStateToProps = (state: GlobalStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
    follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress,
    getUsers
})(UsersContainer)
