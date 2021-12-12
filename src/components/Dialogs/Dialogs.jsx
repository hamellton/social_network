import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogsElements = state.dialog.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <botton onClick={onSendMessageClick}>Start</botton>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;