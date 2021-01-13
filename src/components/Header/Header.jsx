import { NavLink } from 'react-router-dom'
import logo from './../../imgs/facebook-app-symbol.svg'
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="logo" src={logo} alt="" />
          <div className="login__wrapper">
            <div className="login">
              {props.state.isAuth 
              ? <div><NavLink to={`/profile`}><span style={{marginRight: '10px'}}>{props.state.login}</span></NavLink>
              <span style={{cursor: 'pointer'}} onClick={props.logout}>Logout</span></div>
              // ? <div><NavLink to={`/profile/${props.state.id}`}><span style={{marginRight: '10px'}}>{props.state.login}</span></NavLink>
              // <span style={{cursor: 'pointer'}} onClick={props.logout}>Logout</span></div>
              : <div><NavLink to='/login'><span>Login</span></NavLink></div>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header