import React from 'react'
import pictureData from './js/pictureData';

import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation();
  const { currId } = location.state;

  let result = pictureData.filter(item=>{
    return item.id === currId
  })

  
 const { id, productName, category, price, description } = result[0]

  return (
    <div>
      <p>{id}</p>
      <p>{productName}</p>
      <p>{category}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div> 
  )
}

export default Product