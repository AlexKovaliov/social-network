import React, {ChangeEvent, useState} from 'react';
import {setStatus} from "../../../../redux/profile-reducer";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithsHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateMode}>
                        {props.status || "Here you can write your status"}
                    </span>
            </div>}

            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>}
        </div>
    )
}



