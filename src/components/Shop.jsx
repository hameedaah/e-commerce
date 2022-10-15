import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import './css/shop.css'

const Shop = ( {info} ) => {
    const posts = info
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 9

    //current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
  return (   
    <div className='shop-container'>
    <div className='all-items'>
        {currentPosts.map(item=>{
            const {id,productName,imageurl,price} = item
            return (
                <div key={id} className='item-container'>
                    <div className='item'>
                     <Link to="/product"
                     state={{
                       list: info,
                       currId: id 
                       }}
                       >
                        <img src={imageurl} className='item-img' alt={productName}/>
                    <p>{price}</p>
                    </Link>
                    </div>
                    <div>
                       <button>add to cart</button>
                        <Link to="/product" 
                     state={{
                       list: info,
                       currId: id 
                       }}><button>view product</button></Link>
                      
                      </div>
                </div>

            )
        })}
        
     
    </div>
    <Pagination className='paginate' postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
    </div> 
  )
}

export default Shop