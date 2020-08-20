import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionPropsType, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type AppPropsType = {
    /*profilePage: ProfilePageType*/
    dispatch: (action: ActionPropsType) => void
    store: StoreType
}

const Profile = (props: AppPropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}

export default Profile;