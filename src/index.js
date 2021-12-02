import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 0, name: 'Hi, how are you', likeCount: 12},
    {id: 1, name: 'It\'s my first post', likeCount: 10}
];

let dialog = [
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


ReactDOM.render(<App posts={posts} dialog={dialog} messages={messages} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
