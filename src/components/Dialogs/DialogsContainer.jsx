import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../hok/withAuthRedirect';
// import compose from './../Profile/ProfileContainer';

// const DialogsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState().dialogsPage
//         return (
//           <Dialogs state={state}/>
//         )
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return (
    {
      state: state.dialogsPage,
    }
  )
}

// let mapDispatchToProps = () => {
//   return ()
// }

export default connect(mapStateToProps)(withAuthRedirect(Dialogs))

// export default compose(
//   connect(mapStateToProps),
//   withAuthRedirect
// )(Dialogs)