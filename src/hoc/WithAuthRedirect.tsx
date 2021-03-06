import React from "react";
import {Redirect} from "react-router-dom";
import {GlobalStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {MapStateToPropsForRedirectType} from "../components/Profile/ProfileContainer";


let mapStateToPropsForRedirect = (state: GlobalStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


    return ConnectedRedirectComponent;
}