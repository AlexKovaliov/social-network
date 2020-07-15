import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from "../../../redux/state";


const MyPosts = (props: ProfilePageType) => {


    const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea ref={newPostElement}>Text me</textarea>
                </div>

                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts