import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {GlobalStateType} from "../../redux/redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"


type LoginFormPropsType = {
    handleSubmit: () => void
    error: string
}


export const LoginForm: any = ({handleSubmit, error}: LoginFormPropsType) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}
                />
            </div>

            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[required]}
                />
            </div>

            <div>
                <Field type={"checkbox"} name={"remember me"} component={Input}/> Remember me
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export const Login = (props: any) => {
    //need to fix
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: GlobalStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)