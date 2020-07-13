import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props: ProfilePageType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile;