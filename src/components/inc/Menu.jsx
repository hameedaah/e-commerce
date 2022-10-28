import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BsEnvelopeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone,AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import pictureData from '../js/pictureData'
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import '../css/style.css'



const Menu = (props) => {
    const {increase} = useContext(UserContext)
     const location = useLocation();
    //  const [cartValue, setCartValue] = useState(0)
     const [searchTerm, setSearchTerm] = useState('');
     const [test, setTest] = useState(pictureData);

     console.log(props.value)

  const handleChange = (e) => {
    
     e.preventDefault();
    setSearchTerm(e.target.value);

    
    let searchResult = pictureData.filter((item)=>{
      return item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setTest(searchResult)
  };




    if(location.pathname === '/albumcarousel' ){
    return null
  }
  if(location.pathname === '/albumcarousel/big-album' ){
    return null
  }

  const {id } = test[0]

  return (
    <nav className='menu-container'>
        <div className='menu-bar'>
        
        <ul  className='menu-items'>
            <li className='menu-item'>
                <BsEnvelopeFill />
                samplemail@gmail.com
            </li>
            |
            <li className='menu-item'>
                <HiLocationMarker />
                23, Ajao Street, Lagos.
            </li>
            |
            <li className='menu-item'>
                <AiFillPhone />
                +234 803 904 2506
            </li>
            |
            <li className='menu-item'>
                <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" style={{height: '30px'}} placeholder="Search..." aria-label="Search" onChange={handleChange}/>
       <Link to='/product' state={{currId: id}}>
            <button className="btn btn-outline-warning menu-submit submit" style={{ padding: '5px', height: '30px', display: 'flex', alignItems: 'center'}} type="submit"><AiOutlineSearch /></button> 
        </Link> 
    </form>
                {/* <input type="search" placeholder='Search'/> */}
            </li>
            |
            <li className='menu-item cart'>
                <FaShoppingCart className='cart-icon'/>
                <p className='add-cart'>{increase}</p>
            </li>

        </ul>
        
        <Link to="/account" className='account-link'>
        <section className='sign'>
            <BsFillPersonFill />
            Login/Register
        </section>
        </Link>
        </div>
    </nav>
  )
}

export default Menu