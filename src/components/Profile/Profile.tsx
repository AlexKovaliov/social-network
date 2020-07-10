import React from 'react';
import s from './Profile.module.css';
import MyPosts, {postsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {myPostsType} from "../../App";




const Profile = (props: myPostsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile;