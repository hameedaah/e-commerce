import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaCalendarAlt} from 'react-icons/fa'
import { AiFillFolder } from "react-icons/ai";
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'
import Search from './Search';

const categories = [...new Set(pictureData.map(picture=>
  picture.category
))]

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
      {/* Search Component */}
      <Search />
  
     
{/* Top Rated Products */}   
    <section className="card products-container" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <h2 className='title'>Top Rated Products</h2>
    <ul className='product-list'>
    {topRated.map(item=>{
          const {id, price,imageurl, productName} = item
          return(
            <Link key={id} to="/product"
            style={{textDecoration: 'none'}}
            state={{
                       list: pictureData,
                       currId: id 
                       }}
            >
            <li className='product-item'>
              <div className='product-text'>
               <p className='product-name'>{productName}</p>
               <p className='price'><span>&#8358;</span>{price}</p>
               </div>
                <img src={imageurl} alt='product' className='product-img'/>
            </li>
         
          
          </Link>
          )
        })}
    </ul>
  
  </section>


{/* Archives */}
  <section  className="card" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
     <h2 className='title'>Archives</h2>
    <p className='calender-month'><FaCalendarAlt className='cal-icon'/>November 2021</p>

  </section>

  {/* Categories Component */}
  <ul className="card category-list" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">  
      <h2 className='title'>Archives</h2>
      {categories.map((category, idx)=>{
        return(
        <li key={idx}>
          <AiFillFolder className='folder-icon'/>
          {category}
        </li>
        )
      })

      }
  </ul>


  </section>



  )
}

export default Sidebar
