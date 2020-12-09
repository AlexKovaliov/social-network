import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: any
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img
            src="https://www.flaticon.com/svg/static/icons/svg/3430/3430129.svg"
            alt="logo"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header