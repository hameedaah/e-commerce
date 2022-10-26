import React, { useEffect } from 'react'
import { AiFillFolder } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'



const categories = [...new Set(pictureData.map(picture=>
  picture.category
))]


const ToCategories = ({background, color, boxShadow, children}) => {

     useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })

  return (
     <ul className="card category-list" style={{backgroundColor: background,color:color, boxShadow: boxShadow}}   data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">  {children}
      <h2 className='title'>Categories</h2>
      {categories.map((category, idx)=>{
        return(
          <li key={idx} >
            <Link to={`/categories/${category}`} style={{color: color}} className='category-items'
            state={{category: `${category}`}}>
              <AiFillFolder /> {category}
              </Link>
          </li>
        )
      })

      }
  </ul>
  )
}

export default ToCategories