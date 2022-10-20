import React from 'react'
import { useParams } from 'react-router-dom'
import pictureData from './js/pictureData'
import Shop from './Shop'

const SubCategories = () => {
  const params = useParams();
  const subCategory = params.subCategory
  console.log(subCategory)

    
     let filteredsub = pictureData.filter(item=>{
        return item.subCategory === subCategory 
    })
    
    
  return (
    <div>
        <Shop info={filteredsub} />
    </div>
  )
}

export default SubCategories