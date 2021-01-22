import './Users.css';
import { followUser, unfollowUser, requestUsers, setCurrentPage } from './../../redux/reducers/usersReducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import queryString from 'query-string'
import { withRouter } from 'react-router-dom';

class UsersContainer extends React.Component {

  pageChangedOnUrl() {
    let value = queryString.parse(this.props.location.search);
    let currentPage = Number(value.page)
    if (!currentPage) {
      currentPage = this.props.state.currentPage
      this.props.history.push(`/users?page=${currentPage}`)
      this.props.requestUsers(currentPage, this.props.state.pageSize)
    }
    // this.props.setCurrentPage(currentPage)
    this.props.requestUsers(currentPage, this.props.state.pageSize)
  }

  onPageChanged = (page) => {
    // this.props.requestUsers(page.selected, this.props.state.pageSize)
    this.props.history.push(`/users?page=${page}`)
  }

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    // usersAPI.requestUsers(this.props.state.currentPage, this.props.state.pageSize).then(data => {
    //   this.props.setUsers(data.items)
    //   this.props.setTotalCount(data.totalCount)
    //   this.props.toggleIsFetching(false)
    // });
    // this.props.requestUsers(this.props.state.currentPage, this.props.state.pageSize)
    this.pageChangedOnUrl()
  }

  componentDidUpdate(prevProps, prevState) {
    let value = queryString.parse(this.props.location.search);
    let currentPage = value.page
    let prevValue = queryString.parse(prevProps.location.search);
    let prevPage = prevValue.page
    if (currentPage !== prevPage) {
      this.pageChangedOnUrl()
    }
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
  requestUsers,
  setCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UsersContainer))
