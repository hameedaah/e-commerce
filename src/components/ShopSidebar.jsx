import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'
import TopRated from './TopRated'


let topRated = []
for(let i=0; i<5; i++){
      topRated.push(pictureData[i])
}

const Sidebar = () => {
  useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })

  return (
    <section className='sidebar-container'>
    <div className='price-filter' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <label htmlFor="customRange2" className="form-label">Filter by price</label>
<input type="range" className="form-range slider" min="0" max="5" id="customRange2"/>
<div className='filter-and-range'>
  <button className='filter-btn submit'>filter</button>
  <p>Price: <span>&#8358;</span>5000 - <span>&#8358;</span>10000</p>
  </div>
</div>
  
{/* Top Rated Products */}   
    <TopRated />


   <section className="card filter-container" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <h2 className='title'>Filter by</h2>
    <ul className='shop-list'>
      <li>Black</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
  </section>
  </section>



  )
}

export default Sidebar
