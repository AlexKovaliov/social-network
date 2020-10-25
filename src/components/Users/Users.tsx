import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UsersInformationType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersInformationType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: []
}

export let Users = (props: UsersType) => {
    // Math.ceil округляет в большую сторону
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span
                    className={props.currentPage !== undefined ? styles.selectedPage : props.currentPage}
                    onClick={(e) => {
                        props.onPageChanged(page)
                    }}>{page}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto} alt="userPhoto"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.unfollow(u.id)}}>
                                    Unsubscribe
                                </button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)}}>
                                    Subscribe</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{u.location && u.location.country}</div>
                            <div>{u.location && u.location.city}</div>
                        </span>
                    </span>
            </div>
        )
        }
    </div>
}