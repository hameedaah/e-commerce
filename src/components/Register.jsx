import React, { useEffect } from 'react'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'

const Register = () => {

    useEffect(() => {
        AOS.init({
        duration: 100  
        }, [])  
        })

  return (

    <div>
      <div className='loginform' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
<form action="">
        
        
        <label  for="email"><i ></i>Username / Email Address </label><span style={{color:'red'}} className="required">*</span>
        <input style={{marginLeft:'5%'}}  type="email" name="email" id="email" required></input>
        <p>A link to set a new password will be sent to your email address.
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href=""> privacy policy.</a></p>
        <button className="btn btn-outline-danger" type="submit">REGISTER</button>

    </form>
    </div>
    </div>
  )
}

export default Register
