import React from 'react';
import {ActionPropsType, ProfilePageType,} from "../../../redux/store";
import {
    addPostActionCreator,
    AddPostActionCreatorType,
    updateNewPostTextActionCreator, UpdateNewPostTextActionCreatorType
} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType | AddPostActionCreatorType | UpdateNewPostTextActionCreatorType) => void
}


const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer