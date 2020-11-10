import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoType = {
    profile: any       /// need to fix
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }

    return (
        <div>
            <div className={s.content}>
                <img src={props.profile.photos ? props.profile.photos.large : ''} alt="photo"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
            </div>

        </div>
    )
}

export default ProfileInfo;