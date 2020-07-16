import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType, RootStateType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type AppPropsType = {
    posts: Array<PostType>,
    addPost: (message: string) => void
}


const Profile = (props: AppPropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
}

export default Profile;