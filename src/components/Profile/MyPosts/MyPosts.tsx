import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType, ProfilePageType} from "../../../redux/state";

type AppPropsType = {
    posts: Array<PostType>,
    addPost: (message: string) => void
}

const MyPosts = (props: ProfilePageType & AppPropsType) => {

    const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea ref={newPostElement} placeholder="Text me"></textarea>
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