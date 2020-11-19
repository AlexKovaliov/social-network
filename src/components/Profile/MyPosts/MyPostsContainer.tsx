import React from 'react';
import {RootStateType} from "../../../redux/store";
import {
    addPostActionCreator,
    AddPostActionCreatorType,
} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';



let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionCreatorType) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect<any, any, any, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer