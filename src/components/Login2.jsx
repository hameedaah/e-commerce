import React, { useEffect } from 'react'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'

const Login2 = () => {

    useEffect(() => {
        AOS.init({
        duration: 100  
        }, [])  
        })

  return (
    <div>
           <div className="form"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
    <form action=""> 
    <label className="email" for="email"><i ></i>Username / Email Address </label>
    <span style={{color:'red'}} className="required">*</span>
        <input style={{marginLeft:'5%'}}  type="email" name="email" id="email" required></input>
        <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label className="pword" for="password">Password&nbsp;<span style={{color:'red'}} className="required">*</span></label>
				<input style={{marginLeft:'5%'}} className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" required id="password" autocomplete="current-password" />
			</div>
      <div className="form-row">

        <span style={{marginLeft:'10%', fontFamily:'Times'}}><a  href="" >Remember Me </a> </span>
        <button className="btn btn-outline-danger " type="submit">LOG IN</button> 

			</div>
			<div className="digital">
				<a style={{marginLeft:'10%', fontFamily:'Times'}} href="">Lost your password?</a>
			</div>
    </form>
    </div>
    </div>
  )
}

export default Login2