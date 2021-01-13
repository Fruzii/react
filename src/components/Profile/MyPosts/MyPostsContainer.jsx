import { addPost } from './../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState()

//           let onAddPost = () => {
//             // props.addPost()
//             // props.dispatch({type: 'ADD-POST'})
//             store.dispatch(addPostActionCreate())
//           }

//           let updatePost = (text) => {
//             // let text = newPostElement.current.value;
//             // props.updatePostText(text)
//             // props.dispatch({type: 'UPDATE-POST-TEXT', text: text})
//             store.dispatch(updatePostTextActionCreate(text))
//           }
//           return (
//             <MyPosts state={state.profilePage} addPost={onAddPost} updatePostText={updatePost} />
//           )
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return (
    {state: state.profilePage}
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
    {
    addPost: (text) => {
      dispatch(addPost(text))
    },
    // updatePostText: (text) => {
    //   dispatch(updatePostTextActionCreate(text))
    // },
    }
  )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer