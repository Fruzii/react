import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => {
  return (
    {
      isAuth: state.auth.isAuth,
    }
  )
}

export let withAuthRedirect = (Component) => {
  let AuthRedirectComponent = (props) => {
    if (!props.isAuth) {return <Redirect to='/login' />}
    return <Component {...props} />
  }
  AuthRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent)
  return AuthRedirectComponent
}