import React from 'react';
import Profile from './Profile'
import { setProfile, setUserStatus, updateStatus } from './../../redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId && this.props.isAuth) {
      userId = this.props.authId
    }
    this.props.setProfile(userId)
    this.props.setUserStatus(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.setProfile(this.props.match.params.userId)
      this.props.setUserStatus(this.props.match.params.userId)
    }
  }

  render() {
    // let userId = this.props.match.params.userId
    // if (this.props.isAuth && !userId) { return <Redirect to={`/profile/${this.props.authId}`} /> }
    if (!this.props.match.params.userId && !this.props.isAuth) {
      return <Redirect to='/login'/>
    }
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
      isAuth: state.auth.isAuth,
      setUserStatus: state.setUserStatus,
      updateStatus: state.updateStatus,
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