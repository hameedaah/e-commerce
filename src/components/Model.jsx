import React from 'react'
import blogData from './js/blogData' 
import { useLocation } from 'react-router-dom'
import './css/style.css'


const Model = () => {
    const location = useLocation()
    const { title } = location.state;

    let model = blogData.filter((item)=>{
        return item.title === title
    })

    const {image, mainText} = model[0]
    console.log(model)
  return (
        <div className='model-page'>
       <div className='model-content'>
          <img src={image} className='readimage' alt="" />
        </div>

        <div>
        <p className='textside'>
          {mainText} 
         </p>
         </div>
       </div>      
  )
}

export default Model