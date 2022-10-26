import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import { FaFacebookF,FaTwitter,FaVimeoV,FaPinterest,FaInstagram, FaLinkedinIn, FaRss} from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { AiFillPushpin } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import Album from '../Album';
import TopRated from '../TopRated';
import blogData from '../js/blogData.js';
import ToCategories from '../ToCategories';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const allModels =  [...new Set(blogData.map(model=>
  model.title
))]
const Footer = () => {
  const location = useLocation();

   useEffect(() => {
    AOS.init({
      duration: 2000
    }, [])
  })

  if(location.pathname === '/albumcarousel' ){
    return null
  }
  if(location.pathname === '/albumcarousel/big-album' ){
    return null
  }

  return (
    <footer>
        <section className='footer-main'>
        <div className='album footer-items' data-aos="zoom-in-up">
          <h3 className='album-title'>Album Footer</h3>
          <Album />
        </div>
        <div className='recent footer-items' data-aos="zoom-in-up">
          <h3>recent posts</h3>
          <ul>  
            {allModels.map((model, idx)=>{
              return(
                <div key={idx}>
                <Link to="/blog/model" className='model-items'
                   state={{
                    title: model,
                   }}>
                     <li><AiFillPushpin /> {model}</li>
                   </Link>
                   </div>
              )
            })}
          </ul>
        </div>
        <div className='categories footer-items' data-aos="zoom-in-up">
         <ToCategories background="inherit" color="white" boxShadow='none'/>
        </div>
        <div className='products footer-items'   data-aos="zoom-in-up">
         <TopRated background="inherit" color="white" boxShadow='none'/>
        </div>
        </section>
        <section className='footer-bottom'>
          <div>
             <ul className='socials'>
                <li><a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FaFacebookF className='icon'/></a></li>
                <li><a href='https://www.twitter.com' target='_blank' rel="noreferrer"><FaTwitter className='icon'/></a></li>
                <li><a href='https://www.youtube.com' target='_blank' rel="noreferrer"><ImYoutube2 className='icon'/></a></li>
                <li><a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FaVimeoV className='icon'/></a></li>
                <li><a href='https://www.pinterest.com' target='_blank' rel="noreferrer"><FaPinterest className='icon'/></a></li>
                <li><a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FaInstagram className='icon'/></a></li>
                <li><a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><FaLinkedinIn className='icon'/></a></li>
                <li><a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FaRss className='icon'/></a></li>

            </ul> 
            <p className='copyright'>
                Copyright &copy; 2022 Group 1
            </p> 
            </div>
        </section> 
      
    </footer>
  )
}

export default Footer
