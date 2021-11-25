import s from "./Post.module.css";

const Post = (props) => {
  return (
  <div>
    <img alt="zom" src="https://cdn.pixabay.com/photo/2020/02/10/14/25/samurai-4836642_960_720.jpg"/>
    { props.message }
  <div>
    <spam>like</spam> {props.likesCount}
  </div>
  </div>
  )
};

export default Post;
