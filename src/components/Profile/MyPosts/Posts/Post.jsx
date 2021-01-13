import './Post.css';
// import Like from './../../../../imgs/like.svg';
var active = ''

const Post = (props) => {
  if (props.active === '1') {
    active = 'active'
  } else {
    active = ''
  }
  
  // console.log(active)
  return (
    <div className="post">
      <div className="post_top">
        <a href="#s" className="post_img">
          <img src={props.img} alt="" title={props.name} />
        </a>
        <div className="post_text">{props.text}</div>
      </div>
      <div className="post_bottom">
        <button className={`post_like ${active}`}>
          <img src="" alt="" />
        </button>
        <span className="post_like__count">{props.likes}</span>
      </div>

    </div>
  )
}

export default Post