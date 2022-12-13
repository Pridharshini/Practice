import React, { Component } from 'react'

export default class listEx extends Component {
  render() 
  {
    const names=["DeeDee","Markey","Joey"]
    const list=names.map((i=>i));
    return{

        <h1>{list} </h1>
    }
  }
}
