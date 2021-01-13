import './Navbar.css'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = (props) => {
  // let userId = () => {
  //   if (props.userId && props.isAuth) { return props.userId }
  //   else {return ''}
  // }
  return (
    <nav className="nav">
      <NavLink className="nav_link" to={'/profile'}>Profile</NavLink>
      {/* <NavLink className="nav_link" to={`/${props.isAuth ? 'profile' : 'login'}/${userId()}`}>Profile</NavLink> */}
      <NavLink className="nav_link" to="/users">Users</NavLink>
      <NavLink className="nav_link" to="/dialogs">Messages</NavLink>
      <NavLink className="nav_link" to="/news">News</NavLink>
      <NavLink className="nav_link" to="/music">Music</NavLink>
      <NavLink className="nav_link" to="/settings">Settings</NavLink>
    </nav>
  )
}

let mapStateToProps = (state) => {
  return (
    {
      userId: state.auth.id,
      isAuth: state.auth.isAuth,
    }
  )
}
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer