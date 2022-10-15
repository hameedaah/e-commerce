import React, { useEffect } from 'react'
import { AiFillFolder } from "react-icons/ai";
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
// import '../Assets/fonts/fontawesome-free-6.1.1-web/css/all.min.css'
import { Link } from 'react-router-dom'
import pictureData from './js/pictureData'

const allCategories = [...new Set(pictureData.map(picture=>
  picture.category
))]

let topRated = []
  for(let i=0; i<5; i++){
        topRated.push(pictureData[i])
  }

const Sidebar = () => {
     useEffect(() => {
    AOS.init({
    duration: 1000  
    }, [])  
    })

  return (
    <div>
    {/* Beeginning Of Top-Rated */}

    <div style={{marginLeft:'10%', marginTop:'50px'}} className="list-group w-25 ">

    <a className="list-group-item active fw-bold"  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" ><i className="fa-solid fa- me-3"></i>Top Rated Products</a>
    
    
        {topRated.map(item=>{
          const {id, price,imageurl, productName} = item
          return(
            <div key={id}>
          <a className="list-group-item" href=""><i className=" me-3 text-danger"></i>{productName}<span className="woocommerce-Price-amount amount"><bdi>  <span className="woocommerce-Price-currencySymbol">&#36;</span>{price}</bdi></span>
          <img src={imageurl} alt='' width='20px' height='20px'/>
          </a>
          </div>   
          )
        })} 
    </div>
{/*End Of Top-Rated  */}

{/*Beginning Of Archives  */}
    <div style={{marginLeft:'10%', marginTop:'50px'}} className="list-group w-25 "  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <h1 style={{color:'white', backgroundColor:'blue', fontFamily:'serif', fontSize:'25px'}}>Archives</h1>
        <a className="list-group-item"  href=""><i className="fa-solid fa-calendar me-3 text-danger"></i>October 2022 </a>
        </div>
{/* End Of Archives */}

{/* Beginning Of Categories */}

    <div style={{marginLeft:'10%', marginTop:'50px'}}
    className="list-group w-25 " >
        <a className="list-group-item active fw-bold"  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><i className="fa-solid fa- me-3"></i>Categories</a>

        {allCategories.map((item, index)=>{
          return(
            <Link className="list-group-item" 
            to={`/categories/${item}`}
            state={ {category: `${item}`}} 
            ><AiFillFolder />{item}</Link>
            )
        })}


    </div> 
    {/* End Of Categories */}</div>
  )
}

export default Sidebar