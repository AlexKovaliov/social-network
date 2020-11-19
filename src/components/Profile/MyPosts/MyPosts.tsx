import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionPropsType} from "../../../redux/store";
import {
    AddPostActionCreatorType
} from '../../../redux/profile-reducer';
import reduxForm, {Field} from "redux-form";


export type  PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
    newPostText: string
    posts: Array<PostType>
    dispatch: (action: ActionPropsType | AddPostActionCreatorType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
}


let AddNewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText'
                   component='textarea'/>
        </div>

        <div>
            <button>Add post</button>
        </div>
    </form>;
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props: MyPostsType) => {

    const postsElement =
        props.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount}/>)


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts