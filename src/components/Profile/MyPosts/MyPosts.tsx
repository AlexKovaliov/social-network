import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionPropsType, ProfilePageType, StoreType,} from "../../../redux/store";
import {
    addPostActionCreator,
    AddPostActionCreatorType,
    updateNewPostTextActionCreator, UpdateNewPostTextActionCreatorType
} from '../../../redux/profile-reducer';


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType | AddPostActionCreatorType | UpdateNewPostTextActionCreatorType) => void
}


const MyPosts = (props: PropsType) => {

    const postsElement = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.profilePage.newPostText}
                    />
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts