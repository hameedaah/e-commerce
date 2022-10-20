import React, { useEffect } from 'react'
import './css/account.css'
import Login from './Login'
import Register from './Register'
import Sidebar from './Sidebar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const Account = () => {

  useEffect(() => {
    AOS.init({
    duration: 2000  
    }, [])  
    })
  return (
<div className='account-container'>


<section className='sign-up-container'  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
  <h2 className='account-title'>My Account</h2>
  <section className='sign-up'>
<Login />
<Register /> 
</section>
</section>

<section >
<Sidebar />
</section>
  
</div>
    
  )
}

export default Account
