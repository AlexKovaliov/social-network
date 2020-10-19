import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img
            src="https://placeitmarketing.s3.amazonaws.com/public/custompages/logo-maker/Esports-Logo-Maker.png"
            alt="logo"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header