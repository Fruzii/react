import React from 'react';
import { setUserAuth, logout } from './../../redux/reducers/authReducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return (
    { state: state.auth }
  )
}

let mapDispatchToProps = {
  setUserAuth,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)