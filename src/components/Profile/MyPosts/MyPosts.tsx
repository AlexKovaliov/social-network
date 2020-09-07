import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionPropsType} from "../../../redux/store";
import {
    AddPostActionCreatorType,
    UpdateNewPostTextActionCreatorType
} from '../../../redux/profile-reducer';


export type  PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
    newPostText: string
    posts: Array<PostType>
    dispatch: (action: ActionPropsType | AddPostActionCreatorType | UpdateNewPostTextActionCreatorType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const MyPosts = (props: MyPostsType) => {

    const postsElement =
        props.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount}/>)


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : '';
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}
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