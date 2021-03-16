import React from "react";
import {UsersInformationType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersType = {
    users: Array<UsersInformationType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    followingInProgress: Array<any>
}

type UsersPageType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
}

export let Users = ({
                        currentPage,
                        totalUsersCount,
                        pageSize,
                        onPageChanged,
                        users,
                        ...props
                    }: UsersPageType & UsersType) => {

    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
        />
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                    />
                )
            }
        </div>
    </div>
}