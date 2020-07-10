import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {myPostsType} from "../../../App";


export type  postsType = {
    id: number
    message: string
    likesCount: number
}


const MyPosts = (props: myPostsType) => {


    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea>Text me</textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts