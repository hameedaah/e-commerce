import React, {useState} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import '../css/style.css'
import { Link, useLocation } from 'react-router-dom'
import pictureData from '../js/pictureData';

const allCategories = [...new Set(pictureData.map(picture=> picture.category))]

const Navbar = () => {
  const location = useLocation();
  const [subCat, setSubCat] = useState([])


  const selectSub = (category) =>{
    let newCategories = pictureData.filter(item=>{
      return item.category === category
    })
    let subCategories = [...new Set(newCategories.map(picture=> picture.subCategory))]
    setSubCat(subCategories)
  }



  if(location.pathname === '/albumcarousel' ){
    return null
  }
  if(location.pathname === '/albumcarousel/big-album' ){
    return null
  }

  return (
      <nav className="navbar navbar-expand-md bg-white nav-container">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-5 ">
        <li className="nav-item ps-2 pe-4">
          <Link to="/home" className="nav-link list-item" aria-current="page">Home</Link> 
        </li>
        <li className="nav-item  ps-2 pe-4">
          <Link to="/shop" className="nav-link list-item">Shop</Link>
        </li>
        <li className="nav-item ps-2 pe-4">
          <Link to="/blog" className="nav-link list-item">Blog</Link>
        </li>
        <li className="nav-item dropdown ps-2 pe-4" >
          <Link to="/" className="nav-link dropdown-toggle list-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
            <RiArrowDropDownLine />
          </Link>
           <ul className="dropdown-menu" style={{width: '40%'}}>
            {allCategories.map((category, idx)=>
                      <li key={idx}><Link to={`/categories/${category}`}state={ {category: `${category}`}} className="dropdown-item" onMouseOver={()=>{selectSub(category)}}>{category}</Link>
                        
                        <ul className='dropdown-menu dropdown-submenu'>
                        
                          
                          {subCat.map((subCategory, index)=>{
                            return(
                          <li key={index}>
                           <Link to={`/categories/${category}/${subCategory}`} state={ {subCategory: `${subCategory}`}} className="dropdown-item">{subCategory}</Link>
                          </li>
                            )
                          })}
                        </ul>
                      </li> 
              )
            }
            </ul>
           </li>
          
        
        <li className="nav-item ps-2 pe-4">
          <Link to="/contact" className="nav-link list-item">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
