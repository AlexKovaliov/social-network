import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter, Redirect} from 'react-router-dom';
import {getUserProfile, ProfilePageType} from "../../redux/profile-reducer"
import {GlobalStateType} from "../../redux/redux-store";


type MDTP = {
    getUserProfile: (userId: string) => void
}
type MapStatePropsType = {
    profile: ProfilePageType
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType & MDTP

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to="/login"/>

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: GlobalStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);