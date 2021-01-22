import './Users.css';
import Preloader from './../common/Preloader/Preloader';
import Pagination from '@material-ui/lab/Pagination';
import User from './User';
// import Pagination from '../common/Pagination/Pagination';

let Users = (props) => {

  let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const handleChange = (event, value) => {
    props.onPageChanged(value);
  };

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
  // if (props.state.isFetching) return <Preloader />
  return <div className="users">
    <div className="users_inner">
      <div className="profile_title users_title">Users</div>
      <div className="pagination users__pagination">
        {/* {pages.map(p => {
          return <span className={props.state.currentPage === p && 'active'} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })} */}
      <Pagination
        count={pagesCount}
        page={props.state.currentPage}
        onChange={handleChange}
        siblingCount={4}
      />
      </div>
      {
        props.state.isFetching && <Preloader /> 
      }
      {props.state.users.map(user =>
        <User 
        user={user}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        isFollowingInProgress={props.state.isFollowingInProgress}
        key={props.key}
        />
      )}

    </div>
  </div >
}

export default Users
