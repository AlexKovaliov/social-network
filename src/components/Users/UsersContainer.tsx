import React from 'react';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getIsFetching,
    getTotalUsersCount,
    getCurrentPage,
    getFollowingInProgress,
    getUsers,
    getUsersSuper
} from '../../redux/users-selectors';
import {getPageSize} from '../../redux/users-selectors';
import {
    UsersInformationType,
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    toggleFollowingProgress, requestUsers
} from '../../redux/users-reducer';


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
/*let mapStateToProps = (state: GlobalStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

//selectors
let mapStateToProps = (state: GlobalStateType) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress,
        getUsers: requestUsers
    }),
    withAuthRedirect
)(UsersContainer)