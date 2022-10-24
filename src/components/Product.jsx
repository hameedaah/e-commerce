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

  
 const { id, productName, category, imageurl, price, description } = result[0]

  return (
    <section className='detail-page'>
      
    <div className="detail">
      <div >
        <img src={imageurl} alt="" className="big-img"/>
      </div>     
      <div className="box">
        
        <div className="row"><p>{id}</p>
          <h2>{productName}</h2>
          <p>{category}</p>
          <span>{price}</span>
          <p>{description}</p>
        </div>

        {/* <div className="thumb">
          <img src={imageurl} alt="" />

        </div> */}

        <button className="cart"> Add to cart</button>

      </div>


    </div> 
    <div className='detail-topRated'>
    <TopRated />
    </div>
    </section>
  )
}

export default Product