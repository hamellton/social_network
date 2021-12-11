const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, name: 'Hi, how are you', likeCount: 12},
                {id: 1, name: 'It\'s my first post', likeCount: 10}
            ],
            newPostText: 'next start'
        },
        dialogPage: {

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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, nexText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


window.state = store;
export default store;