import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BsEnvelopeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import '../css/style.css'



const Menu = () => {
     const location = useLocation();
    if(location.pathname === '/albumcarousel' ){
    return null
  }
  if(location.pathname === '/albumcarousel/big-album' ){
    return null
  }

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
                <input type="search" placeholder='Search'/>
            </li>
            |
            <li className='menu-item'>
                <FaShoppingCart />
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