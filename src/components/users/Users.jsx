import './Users.css';
import Preloader from './../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';

let Users = (props) => {

  let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  // let onFollow = (id) => {
  //   props.followingInProgress(true, id)
  //   usersAPI.followUser(id).then(response => {
  //     if (response.data.resultCode === 0) {
  //       (props.followUser(id))
  //     }
  //     props.followingInProgress(false, id)
  //   });
  // }

  // let onUnFollow = (id) => {
  //   props.followingInProgress(true, id)
  //   usersAPI.unFollowUser(id).then(response => {
  //     if (response.data.resultCode === 0) {
  //       (props.unfollowUser(id))
  //     }
  //     props.followingInProgress(false, id)
  //   });
  // }

  return <div className="users">
    <div className="users_inner">
      {
        props.state.isFetching ? <Preloader /> : <div className="profile_title users_title">Users</div>
      }
      <div className="pagination users__pagination">
        {pages.map(p => {
          return <span className={props.state.currentPage === p && 'active'} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>

      {props.state.users.map(u =>
        <div className="users_item">
          <div className="user_profile">
            <NavLink to={`/profile/${u.id}`}>
              <div className="post_img users_img">
                {/* <img src={props.img} alt="" /> */}
                <img src={u.photos.small} alt="" />
              </div>
            </NavLink>
            {u.followed ?
              <div className="user_profile__btn active" onClick={() => { props.followUser(u.id) }}><button disabled={props.state.isFollowingInProgress.some( id => id === u.id)}>unfollow</button></div> :
              <div className="user_profile__btn" onClick={() => { props.unfollowUser(u.id) }}><button disabled={props.state.isFollowingInProgress.some( id => id === u.id)}>follow</button></div>}
          </div>
          <div className="user_content">
            <NavLink to={`/profile/${u.id}`}>
              <div className="user_name">{u.name}</div>
            </NavLink>
            <div className="user_status">{u.status}</div>
          </div>
          <div className="user_location">
            {/* <div className="">{props.location.country}</div>
        <div className="">{props.location.city}</div> */}
          </div>
        </div>
      )}

    </div>
  </div >
}

export default Users
