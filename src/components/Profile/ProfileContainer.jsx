import React from 'react';
import Profile from './Profile'
import { setProfile, setUserStatus, updateStatus } from './../../redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './../common/Preloader/Preloader';
import { getIsAuth } from './../../redux/reducers/profileSelectors';

class ProfileContainer extends React.Component {

  getUserId() {
    let userId = this.props.match.params.userId
    if (!userId && this.props.isAuth) {
      userId = this.props.authId
    }
    return userId 
  }

  componentDidMount() {
    
    // alternative method for redirect
    // 
    // if (!this.props.match.params.userId && !this.props.isAuth) {
    //   this.props.history.push('/login')
    // }
    // 
    this.props.setProfile(this.getUserId())
    this.props.setUserStatus(this.getUserId())
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.setProfile(this.getUserId())
      this.props.setUserStatus(this.getUserId())
    }
  }

  render() {
    // let userId = this.props.match.params.userId
    // if (this.props.isAuth && !userId) { return <Redirect to={`/profile/${this.props.authId}`} /> }
    // 
    // main method for redirect
    // 
    if (!this.props.match.params.userId && !this.props.isAuth) {
      return <Redirect to='/login'/>
    }
    if (this.props.state.isFetching) {
      return <Preloader />
    }
    // 
    return (
      <Profile state={this.props.state} setUserStatus={this.props.setUserStatus} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => {
  return (
    {
      state: state.profilePage,
      authId: state.auth.id,
      isAuth: getIsAuth(state),
      // setUserStatus: state.setUserStatus,
      // updateStatus: state.updateStatus,
    }
  )
}

let mapDispatchToProps = {
  setProfile,
  setUserStatus,
  updateStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)