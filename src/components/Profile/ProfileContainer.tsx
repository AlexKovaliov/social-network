import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/store";
import {withRouter, RouteComponentProps} from 'react-router-dom';

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void    /// need to fix
}
type MapStatePropsType = {
    profile: any /// need to fix
}
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);