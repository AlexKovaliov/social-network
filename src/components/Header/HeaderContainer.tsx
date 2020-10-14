import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";

type StateType = {
    auth: {
        login: string | null,
        isAuth: boolean
    }
}

type HeaderContainerPropsType = {
    setUserDataAC: (
        id: string | null,
        email: string | null,
        login: string | null,
        isFetching: boolean
    ) => void,
    isAuth: boolean,
    login: string | null
}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login, isFetching} = response.data.data.login
                    this.props.setUserDataAC(id, email, login, isFetching)
                }
            })
    }

    return() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);