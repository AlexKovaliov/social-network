import React from 'react';
import {UsersInformationType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png"

type UsersComponentsPropsType = {
    users: Array<UsersInformationType>,
    setUsers: (users: Array<UsersInformationType>) => void,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

/*
export let Users = (props: UsersComponentsPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>

                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow
                                </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>

                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}*/

export class Users extends React.Component<UsersComponentsPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}")
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        // Math.ceil округляет в большую сторону
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span
                            className={this.props.currentPage !== undefined ? styles.selectedPage : this.props.currentPage}
                            onClick={() => {
                                this.onPageChanged(page)
                            }}>{page}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto} alt="userPhoto"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unsubscribe
                                </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Subscribe</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
                }
            </div>
        )
    }
}