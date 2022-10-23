import React from 'react'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import Blog from './Blog'
import './css/style.css'




const Home = () => {

  return (
    <div>
      <Carousel />
      <Testimonial />
   <div className='home-image'>
    <h2>This is the parallax image</h2>
  </div>
    <Blog />
    </div>
  )
}

export default Home