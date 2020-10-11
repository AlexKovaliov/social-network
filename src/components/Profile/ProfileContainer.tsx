import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UsersInformationType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type AppPropsType = {
    setUserProfile: (data: ) => void
    profile:
}

class ProfileContainer extends React.Component<AppPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
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

let mapStateToProps = (state: ) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);