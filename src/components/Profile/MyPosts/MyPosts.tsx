import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 23},
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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