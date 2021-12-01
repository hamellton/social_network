import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {

    let dialogs = [
        {id: 0, name: 'Alex'},
        {id: 1, name: 'Max'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Marina'},
        {id: 5, name: 'Sergey'}
    ];

    let messages = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How is your it-kamasutra'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hello'}
    ]

    let dialogsElements = dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;