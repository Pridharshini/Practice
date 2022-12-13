import React, { Component } from 'react'

export default class Components extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"priya",
      }
    }
    inc=()=>
    {
      this.setState({count:this.state.count+1})
    }
  render() {
    console.log(this.state.count)
    return (
      <>
      <h1>{this.state.name}</h1>
      <button onclick={this.inc}>ClickMe{this.state.count}</button>
      </>
    )
  }
}
