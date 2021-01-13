import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import './Helpers.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/Login/Login';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-container container">
          <Navbar />
          <div className="app-wrapper__content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <footer>Footer</footer>
            {/* <Route path='/dialogs' component={Dialogs}/> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
