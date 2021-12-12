import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.profilePage.posts} dispatch={props.dispatch} />
            {/*<MyPosts posts={props.profilePage.posts}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;
