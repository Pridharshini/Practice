import React from 'react'
import './SignUp.css'

export default function SignUpPage() {
  return (
    <div>
    <img className='signpic'  src='https://i.pinimg.com/736x/38/6a/90/386a9072c0575d625e6f7c50da9f38aa.jpg' alt='sign'
    height={"90%"}></img>
  <h1 style={{paddingLeft :"20%",paddingTop:"2%"}}>SIGN UP</h1>
  <div>
  <label  className='fullName' for="myInput"><h3>Full Name  :</h3></label>
  <input className='fullName1'  type="text" />
  </div>
  <div>
  <label  className='Email' for="myInput"><h3>Email  :</h3></label>
  <input className='Email1'  type="text" />
  </div>
  <div>
  <label  className='Username' for="myInput"><h3>Username :</h3></label>
  <input className='username1'  type="text" />
  </div>
  <div>
  <label  className='pwd' for="myInput"><h3>Password :</h3></label>
  <input className='pwd1'  type="text" />
  </div>
  <div>
  <label  className='cp' for="myInput"><h3>Confirm Password:</h3></label>
  <input className='cp1' type="text" />
  </div>
  <button  className='signup' type="button">Sign Up</button>
  <label  className='cb1' for="myInput"><h3>I agree to the Terms and Conditions</h3></label>
  <input  className='cb'  type="checkbox" />

 
  
    </div>
  )
}
