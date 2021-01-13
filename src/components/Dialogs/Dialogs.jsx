import './Dialogs.css'
import Contacts from './Contact/Contacts';
import DialogContainer from './Dialog/DialogContainer';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
  // var state = props.store.getState()
  // var contacts = props.state.contact.map(contact => <Contact id={contact.id} img={contact.img} name={contact.name} />)

  return (
    <div className="dialogs">
      <div className="dialogs_inner">
        <div className="dialogs_title profile_title">Dialogs</div>
        <Contacts state={props.state} />
      </div>
      <DialogContainer />
    </div>
  )
}

export default Dialogs