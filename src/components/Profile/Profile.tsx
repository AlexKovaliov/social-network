import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionPropsType, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type AppPropsType = {
    /*profilePage: ProfilePageType*/
}

const Profile = (props: AppPropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;