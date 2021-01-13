import Send from './../../../imgs/send.svg';
import { Route } from 'react-router-dom';
import React from 'react';
// import { addMessageActionCreate, updateMessageTextActionCreate } from './../../../redux/reducers/dialogsReducer';
import { Field, reduxForm } from "redux-form"

const Message = (props) => {
  var right = ''
  if (props.author === 'me') {
    right = 'right'
  }
  return (
    <div className={`dialog ${right}`}>
      <div className="message">{props.message}</div>
    </div>
  )
}

const addMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit} className="dialog_form">
        <Field name="message" type="text" className="dialog_input" component='input'/>
        <button className="dialog_input__btn">
          <img src={Send} alt="" className="" />
        </button>
      </form>
}

const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(addMessageForm)


const Dialog = (props) => {

  var dialog = props.state.dialog.map(d => <Message id={d.id} message={d.message} key={d.id} author={d.author} />)

  // let addMessage = () => {
  //   props.addMessage()
  //   // props.dispatch({type: 'ADD-MESSAGE'})
  //   // props.dispatch(addMessageActionCreate())
  // }

  // let updatePost = (e) => {
  //   let text = e.target.value
  //   props.updateMessageText(text)
  //   // props.dispatch({type: 'UPDATE-MESSAGE-TEXT', text: text})
  //   // props.dispatch(updateMessageTextActionCreate(text))
  // }

  // let newFun = (e) => {
  //   if (e.keyCode === 13) {
  //     addMessage()
  //   }
  // }

  let addNewMessage = (data) => {
    props.addMessage(data.message)
  }

  return (
    <div className="dialog_area">
      <div className="dialog_area__inner">
        {/* <Message message="sadadasassa" /> */}
        <Route path='/dialogs/1' render={() => dialog} />
        <Route path='/dialogs/2' render={() => 'sagdsaf'} />
        {/* { dialog } */}
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage}/>
    </div>
  )
}

export default Dialog