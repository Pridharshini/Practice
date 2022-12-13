import React from 'react'
import './Style.css'


export default function LoginPage() {
  return (
    <div>
    <img src="https://t3.ftcdn.net/jpg/02/13/15/64/360_F_213156467_sO7JHxCuNWQnUOIBnQJHNOVsBY07a57I.webp" alt="bg" width="1530" height="400" ></img>
    <img  className='logo' src='https://www.creativefabrica.com/wp-content/uploads/2021/07/25/Real-Estate-Building-Construction-logo-Graphics-15107023-1-580x387.jpg' alt='logo'></img>
    <h1 className='app'><b>BUY CASA</b></h1>
    <img className='login' src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' alt='login'></img>
    <label className='ph' for="myInput"><h3>Phone/Email :</h3></label>
<input className='phone'id="myInput" type="text" />
<br></br>
<br></br>

  
<label  className='psd' for="myInput"><h3>Password   :</h3></label>
<input className='pwd' id="myInput" type="text" />
<h3 className='cont'>Continue</h3>
<h3 className='forgot'>Forgot Password?</h3>
<h3 className='new' ><b>New to Buy Casa:</b></h3>
<h3 className='sign'>Sign Up!</h3>

  
     </div>
  )
}

