import React from 'react';
import {RootStateType} from "../../../redux/store";
import {
    addPostActionCreator,
    AddPostActionCreatorType,
    updateNewPostTextActionCreator, UpdateNewPostTextActionCreatorType
} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionCreatorType | UpdateNewPostTextActionCreatorType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer