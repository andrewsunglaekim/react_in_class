import React, {Component} from 'react'

class Comment extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  incrementCounter(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <div>
          {this.props.commentBody}
        </div>
        <div onClick={() => this.incrementCounter()}>
          {this.state.counter}
         </div>
      </div>
    ) 
  }
}

export default Comment
