import React, {Component} from 'react'
import Comment from './Comment'

class Post extends Component {
  render() {
    let {title, author, body, comments} = this.props.pizza
    console.log(comments)
    return(
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div className='postContent'>
          {body}
        </div>
        <div className="comments">
          <Comment commentBody={comments[0]} />
          <Comment commentBody={comments[1]} />
          <Comment commentBody={comments[2]} />
        </div>
      </div>
    )
  }
}
      
export default Post
