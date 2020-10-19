import React from 'react';
import Header, {HeaderPropsType} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";

type MapStateToPropsType = (state: StateType) => void  /// ?????

type StateType = {
    auth: {
        login: string | null,
        isAuth: boolean
    }
}

type setUserDataACType = {
    setUserDataAC: (
        id: string | null,
        email: string | null,
        login: string | null,
        isFetching: boolean
    ) => void,
}

type HeaderContainerPropsType = MapStateToPropsType & setUserDataACType & HeaderPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType & StateType> {
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

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect<MapStateToPropsType, setUserDataACType>(mapStateToProps, {setUserDataAC})(HeaderContainer);