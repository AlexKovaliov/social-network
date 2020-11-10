import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, ProfilePageType, updateStatus} from "../../redux/profile-reducer"
import {GlobalStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MDTP = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
}
type MapStatePropsType = {
    profile: ProfilePageType
    status: string
}
export type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}
type UpdateStatusType = { updateStatus: (status: string) => void }

type OwnPropsType = MapStatePropsType & MDTP & UpdateStatusType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: GlobalStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)