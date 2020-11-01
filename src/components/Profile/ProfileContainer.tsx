import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile, ProfilePageType} from "../../redux/profile-reducer"
import {GlobalStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type MDTP = {
    getUserProfile: (userId: string) => void
}
type MapStatePropsType = {
    profile: ProfilePageType
}
export type MapStateToPropsForRedirectType = {
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

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}

// HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToPropsForRedirect = (state: GlobalStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state: GlobalStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);