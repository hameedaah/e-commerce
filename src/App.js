import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'  
import 'bootstrap/dist/js/bootstrap.bundle'
import Menu from './components/inc/Menu'
import Navbar from './components/inc/Navbar'  
import Footer from './components/inc/Footer'
import Home from './components/Home'
import BigTestimonial from './components/BigTestimonial'
import Shop from './components/Shop'
import Categories from './components/Categories'
import SubCategories from './components/SubCategories'
import Product from './components/Product'
import AlbumCarousel from './components/AlbumCarousel'
import BigAlbum from './components/BigAlbum'
import Blog from './components/Blog'
import Model from './components/Model'
import Account from './components/Account'
import Contact from './components/Contact'
import '../src/components/css/style.css'
import { IoIosArrowUp } from "react-icons/io";
import pictureData from './components/js/pictureData'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
      <div>
       <Menu id="top"/>
        <Navbar />
        
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/shop' element={<Shop info = {pictureData} />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/categories/:categoryName' element={<Categories />}/>
        <Route path='/categories/:categoryName/:subCategory' element={<SubCategories />}/>
        <Route path='/blog' element={<Blog />}/>
        < Route path = '/blog/model' element = {<Model />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/home/main-testimonial' element={<BigTestimonial />}/>
        <Route path='/albumcarousel' element={<AlbumCarousel />}/>
        <Route path='/albumcarousel/big-album' element={<BigAlbum />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/account' element={<Account />}/>
        {/* <Route path="*" element={<Error />}/> */}
        
        </Routes>
         <a href="#top" className='scroll-up'>
        <IoIosArrowUp />
          </a>
        
      
        <Footer />
      </div>
      </Router>
      
  )
}

export default App;
