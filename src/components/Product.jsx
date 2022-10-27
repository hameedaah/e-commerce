import React from 'react'
import pictureData from './js/pictureData';
import './css/product.css'
import TopRated from './TopRated'

import { useLocation } from 'react-router-dom'

const Product = () => {
  
  const location = useLocation();
  const { currId } = location.state;

  let result = pictureData.filter(item=>{
    return item.id === currId
  })

  
 const { productName, category, imageurl, price, description } = result[0]

  return (
    <section className='detail-page'>
      
    <div className="detail">
      <div >
        <img src={imageurl} alt="" className="big-img"/>
      </div>     
      <div className="product-box">
        
        <div className="product-row">
          <h2>{productName}</h2>
          <p>{category}</p>
          <span>{price}</span>
          <p>{description}</p>
        </div>

       

        <button className="cart"> ADD TO CART</button> 
        
        {/* <div className="thumb">
          <img src={imageurl} alt=""  className='small-img'/>

        </div> */}

      </div>


    </div> 
    <div className='detail-topRated'>
    <TopRated />
    </div>
    </section>
  )
}

export default Product