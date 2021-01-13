import { Field, reduxForm } from "redux-form"
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/authReducer' 
import { Element } from './../common/FormControl/FormControls';
import { required } from './../../utils/validators/validators';
import { Redirect } from "react-router-dom";

const Input = Element('input')

let LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field type="text" placeholder='Email' name={'email'} component={Input} validate={[required]}/>
    </div>
    <div>
      <Field type="password" placeholder='Password' name={'password'} component={Input} validate={[required]}/>
    </div>
    <div>
      <Field type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
    </div>
    {props.error && <div>
      {props.error}
    </div>}
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

let Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData)
  }

  if (props.auth.isAuth) {
    // return <Redirect to={`/profile/${props.auth.id}`} />
    return <Redirect to={`/profile`} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

class LoginContainer extends React.Component {
  render () {
    return <Login {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return ({auth: state.auth})
}

export default connect(mapStateToProps, {login})(LoginContainer)