import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import './Helpers.css';

import { initialize } from './redux/reducers/appReducer';
import { withSuspense } from './hok/withSuspense';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Preloader from "./components/common/Preloader/Preloader";
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/users/UsersContainer';
// import Login from './components/Login/Login';
// import { setUserAuth } from './redux/reducers/authReducer';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <div className="app-container container">
            <Navbar />
            <div className="app-wrapper__content">
              <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) } />
              <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
              <Route path='/users' render={ withSuspense(UsersContainer) } />
              <Route path='/login' render={ withSuspense(Login) } />
              <footer>Footer</footer>
              {/* <Route path='/dialogs' component={Dialogs}/> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return (
    { initialized: state.app.initialized }
  )
}

let mapDispatchToProps = {
  initialize,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
