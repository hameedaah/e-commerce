import React, { useEffect } from 'react'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Search from './Search'
import Login2 from './Login2'
import Register from './Register'


const Account = () => {

  // useEffect(() => {
  //   AOS.init({
  //   duration: 3000  
  //   }, [])  
  //   })
  return (
    <div className='sidebar-container'>

<Search />
{/* <Login2 />
<Register /> */}
  
</div>
    
  )
}

export default Account
