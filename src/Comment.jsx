import React, {Component} from 'react'

class Comment extends Component{
  render() {
    return (
      <div>
        {this.props.commentBody}
      </div>
    ) 
  }
}

export default Comment