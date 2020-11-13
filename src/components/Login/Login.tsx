import React from "react";
import reduxForm, {Field} from "redux-form";


type LoginFormPropsType = {
    handleSubmit: () => void
}

                          //??????
export const LoginForm = (props: LoginFormPropsType) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"Login"} component={"input"}/>
            </div>

            <div>
                <Field placeholder={"Password"} name={"Password"} component={"input"}/>
            </div>

            <div>
                <Field type={"checkbox"} name={"Remember me"} component={"input"}/> Remember me
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
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}