import React , {useState}from 'react'
function Login() {
    const[userName, setuserName]=useState('');
    const[password, setPassword]=useState('');
    const formHandler=(event)=>
    {   event.preventDefault();
        const obj={
            name:userName,
            password:password
        }
        console.log(obj);
    }
  return (
    <div>
    <h3><b>Login Page</b></h3>
    <form onSubmit={formHandler}>
    Username :<input type="text" value={userName}  placeholder='Username' 
    onChange={(e)=> setuserName(e.target.value)}/><br></br>
    Password :<input type="password" value={password} placeholder="password" 
    onChange={(e)=> setPassword(e.target.value)}/><br></br>
    <button type='submit'>Login</button>
    </form>
    </div>
  )
}
export default Login