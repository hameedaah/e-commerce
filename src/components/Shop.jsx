import React, {useState, useEffect, useContext} from 'react'
import { Link} from 'react-router-dom'
import {AiFillEye, AiOutlineShopping} from 'react-icons/ai'
import Pagination from './Pagination'
import ShopSidebar from './ShopSidebar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import './css/style.css'
import { UserContext } from '../context/UserContext'






const Shop = ( {info} ) => {
    const posts = info
    
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 9
const {increase, setIncrease} = useContext(UserContext)

    //current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
     useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })

  

  return (   
    <div>

    <div className='shop-page' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
    <section className='shop-container'>

      <div className='shop-text'>
        <h2>Shop</h2>
        <div className='sorting-row'>
        <p>{`Showing ${indexOfFirstPost+1}-${posts.length < 9 ? posts.length : indexOfLastPost} of ${posts.length} results`}</p>
        <select name="sorting" className='sorting' id="sorting">
        <option value="Default Sorting">Default Sorting</option>
        <option value="Sort by Popularity">Sort by Popularity</option>
        <option value="Sort by Average Rating">Sort by Average Rating</option>
        <option value="Sort by latest">Sort by latest</option>
        <option value="Sort by price: low to high">Sort by price: low to high</option>
        <option value="Sort by price: high to low">Sort by price: high to low</option>
        </select>
        </div>
        </div>


    <div className='all-items'> 
        {currentPosts.map(item=>{
            const {id,productName,imageurl,price} = item

            return (
                <div key={id} className='item-container'>
                    <div className='shop-item'>
                     <Link to="/product" style={{textDecoration: 'none'}}
                     state={{
                       list: info,
                       currId: id 
                       }}
                       >
                       <img src={imageurl} className='item-img' alt={productName}/>
                    <p className='shop-price'><span>&#8358;</span>{price}</p>
                    </Link>
                    </div>

                    <div>
                       <button className='shop-btn cart' onClick={() => {
                        setIncrease(increase + 1)
                        }}><AiOutlineShopping className='shop-icon'/> add to cart</button>
                     </div>
                     <div>  
                     <Link to="/product" 
                     state={{
                       list: info,
                       currId: id 
                       }}><button className='shop-btn'><AiFillEye className='shop-icon'/> view product</button></Link>
                    </div>
                </div>

            )
        })}
        
     
    </div>

    <Pagination className='paginate' postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
    </section> 
    <ShopSidebar />

    </div>
    </div>
  )
}

export default Shop