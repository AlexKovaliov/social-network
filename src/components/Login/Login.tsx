import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


type LoginFormPropsType = {
    handleSubmit: () => void
}

//??????
export const LoginForm: any = (props: LoginFormPropsType) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"Login"}
                       component={Input}
                       validate={[required]}
                />
            </div>

            <div>
                <Field placeholder={"Password"}
                       name={"Password"}
                       component={Input}
                       validate={[required]}
                />
            </div>

            <div>
                <Field type={"checkbox"} name={"Remember me"} component={Input}/> Remember me
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export const Login = () => {
    //need to fix
    const onSubmit = (formData: any) => {

    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}