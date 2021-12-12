import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";



const MyPosts = (props) => {
    console.log(props)
    let postsElement = props.posts.map((p, index) => <Post key={`${index}_${p.message}`} message={p.message} likesCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Start</button>
            </div>
        </div>
        <div>New post</div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;
