import React from "react";
import MyPosts from "./MyPosts";
import {updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";



const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewMessageBodyCreator(text);
        props.dispatch(action);
    }

    let onPostChangeProfile = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.posts} />
}

export default MyPostsContainer;
