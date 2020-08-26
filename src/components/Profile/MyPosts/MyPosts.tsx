import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionPropsType, ProfilePageType} from "../../../redux/store";
import {
    AddPostActionCreatorType, initialState,
    UpdateNewPostTextActionCreatorType
} from '../../../redux/profile-reducer';


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionPropsType | AddPostActionCreatorType | UpdateNewPostTextActionCreatorType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const MyPosts = (props: PropsType) => {

    const postsElement =
        props.profilePage.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value: '';
        props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts