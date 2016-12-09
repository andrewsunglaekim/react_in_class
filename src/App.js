import React, {Component} from 'react'
import Post from './Post'

let post = {
  title: "Some Blog",
  author: "me",
  body: "some content",
  comments: [
    "comment1",
    "comment2",
    "threeve comment"
  ]
}

class Hello extends Component {
  render(){
    return (
      <div>
        <h1>Hello !</h1>
        <Post pizza={post}/>
      </div>
    )
  }
}

export default Hello
