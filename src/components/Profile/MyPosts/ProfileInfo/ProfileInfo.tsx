import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://www.tomfornorthdakota.com/wp-content/uploads/2018/11/wallpaper-for-pc-desktop-free-download-moving-wallpapers-for-desktop-free-download-group-hd-wallpapers.jpg"
                    alt="top_picture"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;