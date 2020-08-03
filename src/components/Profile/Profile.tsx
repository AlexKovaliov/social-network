import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionPropsType, PostType, ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type AppPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType) => void
}

const Profile = (props: AppPropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            profilePage={props.profilePage}
            dispatch={props.dispatch}
        />
    </div>
}

export default Profile;