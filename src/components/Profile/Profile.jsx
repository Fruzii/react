import './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import Jpg from './../../imgs/babyYoda.jpg';
import Preloader from './../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import profile_default_pic from '../../imgs/profile_default_pic.png'

const Profile = (props) => {
  if (!props.state.profile) {
    return <Preloader />
  }
  return (
    <div className="profile">
      <ProfileStatus status={props.state.status} updateStatus={props.updateStatus}/>
      {/* <div className="profile_item bgc__transparent">
        <img className="profile_bg_img" src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="" />
      </div> */}
      <div className="profile_inner profile_item">
        <img className="avatar_img" 
        src={props.state.profile.photos.large 
        ? props.state.profile.photos.large 
        : profile_default_pic} 
        alt="" />
        <div className="profile_info">
          <div className="profile_info_inner">
            <div className="profile_name profile_title">{props.state.profile.fullName}</div>
            <div className="profile_info__item">Looking for a job:
            <span>{props.state.profile.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div className="profile_info__item">Looking for a job description:
            <span>{props.state.profile.lookingForAJobDescription}</span>
            </div>
            <div className="profile_info__item">About me:
            <span>{props.state.profile.aboutMe}</span>
            </div>
          </div>
          <div className="profile_info_inner">
            <div className="profile_info__item">Facebook:
            <a href={props.state.profile.contacts.facebook}><span>{props.state.profile.contacts.facebook}</span></a>
            </div>
            <div className="profile_info__item">Website:
            <a href={props.state.profile.contacts.website}><span>{props.state.profile.contacts.website}</span></a>
            </div>
            <div className="profile_info__item">VK:
            <a href={props.state.profile.contacts.vk}><span>{props.state.profile.contacts.vk}</span></a>
            </div>
            <div className="profile_info__item">Twitter:
            <a href={props.state.profile.contacts.twitter}><span>{props.state.profile.contacts.twitter}</span></a>
            </div>
            <div className="profile_info__item">Instagram:
            <a href={props.state.profile.contacts.instagram}><span>{props.state.profile.contacts.instagram}</span></a>
            </div>
            <div className="profile_info__item">Youtube:
            <a href={props.state.profile.contacts.youtube}><span>{props.state.profile.contacts.youtube}</span></a>
            </div>
            <div className="profile_info__item">Github:
            <a href={props.state.profile.contacts.github}><span>{props.state.profile.contacts.github}</span></a>
            </div>
            <div className="profile_info__item">Main link:
            <a href={props.state.profile.contacts.mainLink}><span>{props.state.profile.contacts.mainLink}</span></a>
            </div>
          </div>
        </div>
      </div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile