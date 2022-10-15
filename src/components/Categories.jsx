import React from 'react'
import { useParams } from 'react-router-dom'
import pictureData from './js/pictureData'
import Shop from './Shop'

const Categories = () => {
  const params = useParams();
  const category = params.categoryName

  console.log(params)


     let items = pictureData.filter(item=>{
        return item.category === category
    })
    
  return (
    <div>
        <Shop info={items} />
    </div>
  )
}

export default Categories