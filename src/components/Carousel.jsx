import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'


const Carousel = () => {

  
  return (
    
    <div className='carousel-page'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active first image">
        <div className='inner-text'>
          <h1 className='welcome'>Welcome</h1>
        </div>
    </div>
    <div className="carousel-item second image">
      <div className='inner-text'>
          <h1>Browse through Our Catalogue</h1>
          <Link to="/"><button className='button'>Shop</button></Link>
        </div>
    </div>
    <div className="carousel-item third image">
      <div className='inner-text'>
          <h1>Browse through Our Catalogue</h1>
          <Link to="/"><button className='button'>Shop</button></Link>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel