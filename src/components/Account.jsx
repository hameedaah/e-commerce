import React, { useEffect } from 'react'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Sidebar from './Sidebar'



const Account = () => {

  useEffect(() => {
    AOS.init({
    duration: 1000  
    }, [])  
    })
  return (
    <div>


{/*  Beginning of search component */}
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
<button style={{color:'white'}} className="btn btn-outline-warning" type="submit"><i style={{color:'red'}} className="fas fa-search"></i>Search</button>  
</form>
{/*  End of search component */}


{/* Beginning Of My Account */}

<h1 style={{textAlign:'center', fontWeight: 'bold',color: 'gold', fontSize:'30px', fontFamily:'serif'}}>My Account</h1>

{/* End Of My Account */}


{/* Beginning Of LogIn */}
<div className="form"  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
    <form action=""> 
        <h3>Log In</h3>
        
        <label for="email"><i style={{color:'black'}} className="fas fa-user"></i>Username / Email Address</label>
        <input  type="email" name="email" id="email" required></input>
        <label for="password" required><i style={{color:'red'}} className="fas fa-key"></i>Password</label> 
        <input type="password " name="password" required id="password" autocomplete="current-password"></input>
        <input type="submit" id="Login"></input>
        <small><a href="">Forgot password?</a></small>
        {/* <a href="">Log In</a> */}
        <button className="btn btn-outline-danger" type="submit">Log In</button>
    </form>
</div>
{/* End Of LogIn */}



{/* Beginning Of Register */}
<div className='loginform' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
<form action="">
  <h3>Register</h3>
        
  <label for="email"><i style={{color:'black'}} className="fas fa-user"></i>Email Address </label>
        <input type="email" name="email" id="email" required></input>
        <p>A link to set a new password will be sent to your email address.
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        <span><a href="">Don't have an account? </a>  <button className="btn btn-outline-danger" type="submit">Register</button></span>

    </form>
</div>
{/* End Of Register */}

<Sidebar />
  
</div>
    
  )
}

export default Account
