import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type AppPropsType = {
    profilePage: ProfilePageType
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: AppPropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            profilePage={props.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;