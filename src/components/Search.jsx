import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import pictureData from './js/pictureData'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Search = () => {
     const [searchTerm, setSearchTerm] = useState('');
     const [infor, setInfor] = useState('');


  const handleChange = (e) => {
    
     e.preventDefault();
    setSearchTerm(e.target.value);

    
    let searchResult = pictureData.filter((item)=>{
      return item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setInfor(searchResult)
  };


    useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })
  return (
    <nav className="search-container card" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={handleChange}/>
      
       <Link to={`/shop/${infor}`} state={{ infor: infor }}>
            <button className="btn btn-outline-warning" type="submit">Search</button> 
        </Link>
    </form>
    </nav>
  )
}

export default Search