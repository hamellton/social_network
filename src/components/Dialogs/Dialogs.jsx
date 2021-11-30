import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Alex'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Alex" id="1" />
                <DialogItem name="Max" id="2" />
                <DialogItem name="Andrey" id="3" />
                <DialogItem name="Elena" id="4" />
                <DialogItem name="Marina" id="5" />
                <DialogItem name="Sergey" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra" />
                <Message message="yo" />
                <Message message="yo" />
                <Message message="yo" />
            </div>
        </div>
    )
}

export default Dialogs;