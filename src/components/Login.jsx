import React from 'react'
import './css/account.css'

const Login = () => {



  return ( 
    <div style={{width: '47%'}}>
      <h2 className='account-login'>Login</h2>
    <form action=""  className="sign-up-form" > 
    <label className="email" htmlFor="email">Username or Email Address <span style={{color:'red'}} className="required">*</span></label>
 
        <input type="email" name="email" id="email" required></input>
        <div >
				<label className="pword" htmlFor="password">Password <span style={{color:'red'}} className="required">*</span></label>
			 <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" required id="password" autoComplete="current-password" />
			</div>
      <div className="form-row">
        <button className="btn btn-outline-danger" type="submit">LOG IN</button> 
			</div>
			<div className="digital">
				<a  href="# ">Lost your password?</a>
			</div> 
    </form>
    </div>
  )
}

export default Login