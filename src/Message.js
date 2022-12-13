import React from 'react'

export default function Message(props) {
  return (
    <div>
    <h3>Name={props.name}</h3>
    <h2>Age={props.age}</h2>
    <p>{props.language}</p>
    </div>
  )
}


