import React from 'react'
import './css/style.css'

const Pagination = ( {postsPerPage, totalPosts, paginate, currentPage}) => {
   const pageNumbers = []

   for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
   }
    
  return (
    <nav aria-label="..." className='pagination'>
  <ul className="pagination justify-content-center">


    {currentPage !== 1 &&
    (<li className="page-item">
      <a className="page-link number" href="# " onClick={()=>paginate(currentPage-1)}>Previous</a>
    </li>)
    }

    {pageNumbers.map((number, index) => {
        return(
        <li key={index} className={currentPage===number ?"page-item active":"page-item"}><a className="page-link number" href="# " onClick={()=>paginate(number)} >{number}</a></li>
        )
    })}


    {currentPage !== pageNumbers.length &&
    (<li className="page-item ">
      <a className="page-link number" href="# " onClick={()=>paginate(currentPage+1)}>Next</a>
    </li>)
    }
  </ul>
</nav>

  )
}

export default Pagination