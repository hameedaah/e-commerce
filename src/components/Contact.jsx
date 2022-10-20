import React, { useEffect } from 'react'
import './css/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const Contact = () => {

 useEffect(()=>{
     AOS.init({
      duration: 500
    }, [])
  })


  return (
      
<div className="contact-container">
  <form className="contact-form">
  <div className="contact-item" data-aos="fade-right" data-aos-easing="ease-out-cubic"  data-aos-duration="500">
    <label for="staticEmail2" className="visually-hidden" >Name</label>
    <input type="text" className="form-control " id="inputEmail" required placeholder="Name"></input>
  </div>
  <div className="contact-item"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <label for="inputPassword2" className="visually-hidden">Email</label>
    <input type="email" className="form-control" id="inputPassword2" required placeholder="Email"></input>
  </div>
  <div className="contact-item"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <label for="inputPassword2" className="visually-hidden">Subject</label>
    <input type="email" className="form-control" id="inputPassword2"  placeholder="Subject"></input>
  </div>
  <div className="contact-item"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" required placeholder="Message"></textarea>
  </div>
  <button data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" type="submit" className="contact-item btn btn-primary mb-3">SEND MESSAGE</button>
</form>
</div>
  )
}

export default Contact
