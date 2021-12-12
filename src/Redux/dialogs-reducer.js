const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    dialog: [
        {id: 0, name: 'Alex'},
        {id: 1, name: 'Max'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Marina'},
        {id: 5, name: 'Sergey'}
    ],

    messages: [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How is your it-kamasutra'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hello'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;