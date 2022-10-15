import React from 'react'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

const BigTestimonial = () => {
    const location = useLocation();
    console.log(location)
    const {id, image, peopleDate} = location.state;
  return (
    <div>
    <Sidebar /> 
    <section className='main-testimonial'>
    <p>{`Testimonial ${id}`}</p>
    <img src={image} alt='testimonial-image'/>
    </section>

    </div>
  )
}

export default BigTestimonial