import React, {Component} from 'react'
import Comment from './Comment'

class Post extends Component {
  render() {
    let {title, author, body, comments} = this.props.pizza
    let commentComps = comments.map((comment, i) => {
      return(
        <Comment key={i} commentBody={comment}/>
      )
     })
    return(
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div className='postContent'>
          {body}
        </div>
        <div className="comments">
          {commentComps}
        </div>
      </div>
    )
  }
}
      
export default Post
