import React, {useState} from 'react'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import './css/account.css'

const Login = () => {
const [showPassword, setShowPassword] = useState(false)

const togglePassword = (e) => {
  e.preventDefault()
  setShowPassword(!showPassword)
}


  return ( 
    <div style={{width: '47%'}}>
      <h2 className='account-login'>Login</h2>
    <form action=""  className="sign-up-form" > 
    <label className="email" htmlFor="email">Username or Email Address <span style={{color:'red'}} className="required">*</span></label>
 
        <input type="email" name="email" id="email" required></input>
        <div >
				<label className="pword" htmlFor="password">Password <span style={{color:'red'}} className="required">*</span></label>
        <div className='password-field'>
			 <input className="woocommerce-Input woocommerce-Input--text input-text" type={showPassword ? 'text' : 'password'} name="password" required id="password" autoComplete="current-password" />
       <span onClick={togglePassword} className="eye-icon">
       {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
       </span>
       </div>
			</div>
      <div className="form-row">
        <button className="btn btn-outline-danger submit" type="submit">LOG IN</button> 
        <div className='remember-me'> 
        <input type="checkbox" name="remember" />
        <label>
          Remember me
    </label>
    </div>
			</div>
			<div className="digital">
				<a  href="# ">Lost your password?</a>
			</div> 
    </form>
    </div>
  )
}

export default Login