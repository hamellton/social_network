import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {
    let postsElement = props.posts.map((p, index) => <Post key={`${index}_${p.message}`} message={p.message} likesCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let actione = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(actione);
    }


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div>New post</div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;
