import './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Jpg from './../../imgs/babyYoda.jpg';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile_item bgc__transparent">
        <img className="profile_bg_img" src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="" />
      </div>
      <div className="profile_inner profile_item">
        <img className="avatar_img" src={Jpg} alt="Baby Yoda" />
        <div className="profile_info">
          <div className="profile_name profile_title">Bogdan Demchuk</div>
          <div className="profile_info__item">Date of Birth:
            <span>11.09.1999</span>
          </div>
          <div className="profile_info__item">City:
            <span>Parkhomivka</span>
          </div>
          <div className="profile_info__item">Education:
            <span>VNAU</span>
          </div>
          <div className="profile_info__item">Web Site:
            <span>this</span>
          </div>
        </div>
      </div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile