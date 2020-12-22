import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setUserDataAC, getAuthUserData} from "../../redux/auth-reducer";
import {GlobalStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MDTP = {
    // setUserDataAC: (userId: string | null,
    //                 email: string | null,
    //                 login: string | null,
    //                 isFetching: boolean, isAuth: boolean) => void

    getAuthUserData: () => void
}


type HeaderContainerPropsType = MapStateToPropsType & MDTP & { logout: () => void }


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    return() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setUserDataAC, logout})(HeaderContainer);