import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import pictureData from './js/pictureData'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Search = () => {
     const [message, setMessage] = useState('');
     const [data, setData] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let searchResult = pictureData.filter((item)=>{
        return message.toLowerCase() === item.productName.toLowerCase()
    })
    console.log(searchResult)
    setData(searchResult)
   
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
       {/* <Link to="/product" 
                     state={{
                       currId: data[0].id 
                       }}> */}
                          <button className="btn btn-outline-warning" type="submit" onClick={handleClick}>Search</button> 
                       {/* </Link> */}
    </form>
    </nav>
  )
}

export default Search