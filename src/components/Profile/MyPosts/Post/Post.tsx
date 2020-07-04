import React from 'react';
import s from './Post.module.css';
import {type} from "os";

type PropsTypePost = {
    likesCount: number
    message: string
}


function Post (props:PropsTypePost) {

    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1008348/240268e4-0014-4374-a6bd-e72e45e1aaaf/s1200"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post