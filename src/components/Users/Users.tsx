import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UsersInformationType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersInformationType>,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    onPageChanged: (pageNumber: number) => void
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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/unsubscribe/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "40d9ad0b-5c59-493c-b1f4-22ed9e6cc14c"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unsubscribe
                                </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/subscribe/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "40d9ad0b-5c59-493c-b1f4-22ed9e6cc14c"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Subscribe</button>}
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