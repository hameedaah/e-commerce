import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'



let topRated = []
for(let i=0; i<5; i++){
      topRated.push(pictureData[i])
}
const TopRated = ({background, color, boxShadow, fontWeight, children}) => {
    useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })

  return (
       <section className="card products-container" 
       style={{backgroundColor: background,color:color, boxShadow: boxShadow, fontWeight:fontWeight}}  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500"> {children}
    <h2 className='title' style={{fontWeight: fontWeight}}>Top Rated Products</h2>
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
               <p className='product-name' style={{color: color, fontWeight:fontWeight}}>{productName}</p>
               <p style={{color: color}} className='price'><span>&#8358;</span>{price}</p>
               </div>
                <img src={imageurl} alt='product' className='product-img'/>
            </li>
         
          
          </Link>
          )
        })}
    </ul>
  </section>
  )
}

export default TopRated