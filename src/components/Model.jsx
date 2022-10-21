import React from 'react'
import blogData from './js/blogData' 
import { useLocation } from 'react-router-dom'
import './css/style.css'
import Sidebar from './Sidebar'
import Footer from './inc/Footer'

const Model = () => {
    const location = useLocation()
    const { id } = location.state;

    let model = blogData.filter((item)=>{
        return item.id === id
    })

    const {title, image, mainText} = model[0]
    console.log(model)
  return (
    

    <div>
        <div className='blog-container'>
         {/* <Sidebar/> */}
       


       <div className='mainblog-container'>
          <img src={image} className='readimage' style={{width: '500px', height:'500px'}} alt="" />
        </div>

        <div>
        <p className='textside'>
          {mainText} 
         </p>
         </div>
       </div> 
       {/* <Footer/> */}
    </div>

      
  )
}

export default Model