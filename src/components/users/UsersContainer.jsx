import './Users.css';
import { followUser, unfollowUser, getUsers } from './../../redux/reducers/usersReducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize).then(data => {
    //   this.props.setUsers(data.items)
    //   this.props.setTotalCount(data.totalCount)
    //   this.props.toggleIsFetching(false)
    // });
    this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.state.pageSize)
  }

  // let users = props.state.users.map(u =>
  //   <User id={u.id} photo_small={u.photos.small} key={u.id} name={u.name} followed={u.followed} status={u.status} unfollowUser={props.unfollowUser} followUser={props.followUser} />)
  // <User id={u.id} photo_small={u.photo.small} key={u.id} name={u.name} followed={u.followed} status={u.status} location={u.location} unfollowUser={props.unfollowUser} followUser={props.followUser} />)

  render() {
    return <Users
      state={this.props.state}
      onPageChanged={this.onPageChanged}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      followingInProgress={this.props.followingInProgress}
    />
  }
}

let mapStateToProps = (state) => {
  return (
    { state: state.usersPage }
  )
}

// let mapDispatchToProps = (dispatch) => {
//   return (
//     {
//       followUser: (userId) => {
//         dispatch(followUserAC(userId))
//       },
//       unfollowUser: (userId) => {
//         dispatch(unfollowUserAC(userId))
//       },
//       setUsers: (users) => {
//         dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (page) => {
//         dispatch(setCurrentPageAC(page))
//       },
//       setTotalCount: (number) => {
//         dispatch(setTotalCountAC(number))
//       },
//       toggleIsFetching: (IsFetching) => {
//         dispatch(toggleIsFetchingAC(IsFetching))
//       },
//     }
//   )
// }

let mapDispatchToProps = {
  followUser,
  unfollowUser,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)