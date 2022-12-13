import React,{useState} from 'react'

function HooksEx() {
  const[count,setCount]=useState(0)
  let inc=()=>{
    setCount(count+1)
  }
  return (
    <div>
    {count}
    <button onClick={inc}>ClickMe</button>
    </div>
  ) 
}

export default HooksExc