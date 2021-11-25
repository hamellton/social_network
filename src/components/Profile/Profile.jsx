import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
      <div>
        <img alt="bom" src="https://www.krafton.com/wp-content/uploads/2021/06/games-banner7-min.png" />
      </div>
      <div>
        ava + description
        </div>
    <MyPosts />
    </div>
}

export default Profile;
