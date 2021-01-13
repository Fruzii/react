import { NavLink } from 'react-router-dom';

const Contacts = (props) => {
  var contacts = props.state.contact.map(contact => <Contact id={contact.id} img={contact.img} key={contact.id} name={contact.name} />)
  return contacts
}

const Contact = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className="dialogs_inner__item">
      <div className="post_img dialog_img">
        <img src={props.img} alt="" />
      </div>
      <div className="post_text">{props.name}</div>
    </NavLink>

  )
}

export default Contacts