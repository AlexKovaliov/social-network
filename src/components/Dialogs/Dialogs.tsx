import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogsItem";
import Message, {MessageType} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from "../../utils/validators/validators";


export type DialogsPropsType = {
    /* store: StoreType*/
    dialogsPage: DialogsPageType
    sendMessage: (newMassageBody?: string) => void
    updateNewMessageBody: (body: string) => void
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
    isAuth: boolean
}


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody = state.newMassageBody;

    let addNewMessage = (values: { newMassageBody: string }) => {
        props.sendMessage(values.newMassageBody)
    }

    if (!props.isAuth) return <Redirect to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>

            </div>
            <AddMessageFormRedux/>
        </div>
    )
}

const maxLengthCreator50 = maxLengthCreator(50)

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLengthCreator50]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;