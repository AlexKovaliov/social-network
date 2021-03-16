import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UsersInformationType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UserType = {
    user: UsersInformationType,
    followingInProgress: Array<any>,
    unfollow: (userId: string) => void,
    follow: (userId: string) => void
}

export let User = ({user, followingInProgress, unfollow, follow}: UserType) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={styles.userPhoto} alt="userPhoto"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>
                            Unsubscribe
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Subscribe</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location && user.location.country}</div>
                    <div>{user.location && user.location.city}</div>
                </span>
            </span>
        </div>
    )
}