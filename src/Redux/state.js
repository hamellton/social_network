import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
}

window.state = store;
export default store;