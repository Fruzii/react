import { addMessageActionCreate } from '../../../redux/reducers/dialogsReducer'; 
import Dialog from './Dialog';
import { connect } from 'react-redux';

// const DialogContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState()

//         let onAddMessage = () => {
//           // props.addMessage()
//           // props.dispatch({type: 'ADD-MESSAGE'})
//           store.dispatch(addMessageActionCreate())
//         }

//         let updatePost = (text) => {
//           // let text = e.target.value
//           // props.updateMessageText(text)
//           // props.dispatch({type: 'UPDATE-MESSAGE-TEXT', text: text})
//           store.dispatch(updateMessageTextActionCreate(text))
//         }
//         return (
//           <Dialog state={state.dialogsPage} addMessage={onAddMessage} updateMessageText={updatePost} />
//         )
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return (
    {state: state.dialogsPage}
  )
}

let mapDispatchToProps = (dispatch) => {
  return ({
    addMessage: (message) => {
      dispatch(addMessageActionCreate(message))
    },
    // updateMessageText: (text) => {
    //   dispatch(updateMessageTextActionCreate(text))
    // },
  })
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)


export default DialogContainer