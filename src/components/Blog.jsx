import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'





import './css/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import blogData from './js/blogData' 
import Sidebar from './Sidebar'
import { RiRunFill } from 'react-icons/ri'
import Footer from './inc/Footer'






const Blog = () => {
  // const posts = info
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  //current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    AOS.init({

      duration: 500

    }, [])
    

  })


    
  return (
    <div>
    <div className='large-image'></div>
    <div className='blog-container'>
      <Sidebar />
    <section className='main-blog'>
      {currentPosts.map((item)=>{
        const {id, title, image, smallText} = item
        return(
          <div data-aos="fade-left" className='box' key={id}>
          <div className='outer'>
             <h1>{title}</h1>
             <div className='left-side'>
              <img src={image} alt="" />
             </div>
             <div className='right-side'>
               <p>
                {smallText}
                <div>
                   <Link to="/blog/model"
                   state={{
                    id: id,
                   }}>
                    <button className='btn'>READ MORE</button>
                   </Link>
                 </div>
               </p>
             </div>
           </div>
          </div>
           )
      })}
    </section>
    
    
</div>
<Pagination className='paginate' postsPerPage={postsPerPage} totalPosts={blogData.length} paginate={paginate} currentPage={currentPage}/>
<Footer/>
</div>
      )
}






export default Blog