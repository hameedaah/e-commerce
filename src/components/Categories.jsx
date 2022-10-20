import React from 'react'
import { useParams } from 'react-router-dom'
import pictureData from './js/pictureData'
import Shop from './Shop'

const Categories = () => {
  const params = useParams();
  const category = params.categoryName
  


     let filteredCategory = pictureData.filter(item=>{
        return item.category === category 
    })

    
    
    
  return (
    <div>
        <Shop info={filteredCategory} />
    </div>
  )
}

export default Categories