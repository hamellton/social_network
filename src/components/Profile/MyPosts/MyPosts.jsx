import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let posts = [
        {id: 0, name: 'Hi, how are you', likeCount: 12},
        {id: 1, name: 'It\'s my first post', likeCount: 10}
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div>New post</div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;
