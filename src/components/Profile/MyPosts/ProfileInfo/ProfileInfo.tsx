import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {ProfilePageType} from "../../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: any       /// need to fix
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoType) => {
    if (!profile) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }

    return (
        <div>
            <div className={s.content}>
                <img src={profile.photos ? profile.photos.large : ''} alt="photo"/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
            </div>
        </div>
    )
}

export default ProfileInfo;