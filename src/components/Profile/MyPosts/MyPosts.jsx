import './MyPosts.css';
import Post from './Posts/Post';
import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthC, required } from '../../../utils/validators/validators'
// import { Input } from './../../common/FormControl/FormControls';
import { Element } from './../../common/FormControl/FormControls';

// onKeyDown={newFun} onChange={updatePost} value={props.state.newPostText}
const maxLength30 = maxLengthC(30)

// for Field component={}
const Input = Element("input");

let MyPostForm = (props) => {
  return <form onSubmit={props.handleSubmit} className="posts_form">
    <Field component={Input} name="text" type="text" className="posts_input" placeholder="Your news..." validate={[maxLength30, required]}/>
    <button type="submit" className="posts_btn">Send</button>
  </form>
}

const MyPostReduxForm = reduxForm({ form: 'MyPost' })(MyPostForm)

const MyPosts = memo(props => {
  let posts = props.state.posts.map(post => <Post id={post.id} img={post.img} name={post.name} text={post.text} likes={post.likes} active={post.active} key={post.id} />)

  // let addPost = () => {
  //   props.addPost()
  // }

  // let updatePost = (e) => {
  //   let text = e.target.value;
  //   props.updatePostText(text)
  // }

  // let newFun = (e) => {
  //   if (e.keyCode === 13) {
  //     addPost();
  //   }
  // }

  let addNewPost = (data) => {
    props.addPost(data.text)
  }

  return (
    <div className="profile_item my_posts">
      <div className="my_posts__inner">
        <div className="posts_title profile_title">My posts</div>
        <MyPostReduxForm onSubmit={addNewPost}/>
        <div className="posts">
          {posts}
        </div>
      </div>
    </div>
  )
})

export default MyPosts