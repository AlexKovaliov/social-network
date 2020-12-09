import React from 'react';
import Header, {HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {logout, setUserDataAC} from "../../redux/auth-reducer";
import {GlobalStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    logout: any
}

type MDTP = {
    // setUserDataAC: (userId: string | null,
    //                 email: string | null,
    //                 login: string | null,
    //                 isFetching: boolean, isAuth: boolean) => void

    getAuthUserData: () => void
}


type HeaderContainerPropsType = MapStateToPropsType & MDTP


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
    logout: any
})

export default connect(mapStateToProps, {setUserDataAC, logout})(HeaderContainer);