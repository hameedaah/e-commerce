import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import peopleData from './js/peopleData'
import './css/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'



const Home = () => {


  useEffect(()=>{
     AOS.init({
      duration: 500
    }, [])
  })
  return (
    <div>
      <Carousel />
    <section className='testimonial-container'>
      <div className='text'>
        <h2>Testimonials</h2>
        <p>Read our testimonials from clients</p>
      </div>
    <section className='testimonial' >
    {peopleData.map((person)=>{
      const {id, image, testimonial} = person
      return(
        <section key={id} className='speechBubble'>
          <div className='bubbleText'>
            <p>{testimonial}</p>
          </div>
          <Link to="/home/main-testimonial"
            state={{
              id: id,
              image: image,
              }}
          >
          <div className='person-img-container'>
          <img src={image} className='person-img' data-aos='fade-down'
          alt='person' />
          </div>
          </Link>

        </section>
      )
      
    })}
    
  </section>
  
    </section>
   
   <div className='home-image'>
    <h2>This is the parallax image</h2>
  </div>

    </div>
  )
}

export default Home