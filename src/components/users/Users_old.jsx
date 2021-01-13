import './Users.css';
import Jpg from './../../imgs/babyYoda.jpg';
import * as axios from 'axios';
// import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div className="users_item">
      <div className="user_profile">
        <div className="post_img users_img">
          {/* <img src={props.img} alt="" /> */}
          <img src={props.photo_small} alt="" />
        </div>
        {props.followed ?
          <div className="user_profile__btn active" onClick={() => { (props.unfollowUser(props.id)) }}><button>unfollow</button></div> :
          <div className="user_profile__btn" onClick={() => { (props.followUser(props.id)) }}><button>follow</button></div>}
      </div>
      <div className="user_content">
        <div className="user_name">{props.name}</div>
        <div className="user_status">{props.status}</div>
      </div>
      <div className="user_location">
        {/* <div className="">{props.location.country}</div>
        <div className="">{props.location.city}</div> */}
      </div>
    </div>

  )
}

const Users = (props) => {
  if (props.state.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
      props.setUsers(response.data.items)
    )
  }

  let users = props.state.users.map(u =>
    <User id={u.id} photo_small={u.photos.small} key={u.id} name={u.name} followed={u.followed} status={u.status} unfollowUser={props.unfollowUser} followUser={props.followUser} />)
    // <User id={u.id} photo_small={u.photo.small} key={u.id} name={u.name} followed={u.followed} status={u.status} location={u.location} unfollowUser={props.unfollowUser} followUser={props.followUser} />)

  return (
    <div className="users">
      <div className="users_inner">
        <div className="profile_title users_title">Users</div>
        {users}
      </div>
    </div>
  )
}

export default Users
