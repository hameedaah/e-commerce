import React, { useState, useEffect } from 'react'
import './css/account.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import pictureData from './js/pictureData'

const categories = [...new Set(pictureData.map(picture=>
  picture.category
))]

let topRated = []
  for(let i=0; i<5; i++){
        topRated.push(pictureData[i])
  }
const Search = () => {
  const [topProducts, setTopProducts] = useState(topRated)

  

  console.log(topRated)

  useEffect(() => {
    AOS.init({
    duration: 5000  
    }, [])  
    })

  return (
    <div>
    <nav className="navbar bg-" style={{top:'70px', left:'5%'}}>
  <div className="container-fluid" >
    <form className="d-flex" role="search" data-aos="fade-right" data-aos-easing="ease-out-cubic">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button style={{color:'red'}} className="btn btn-outline-warning" type="submit"><i style={{color:'red'}} className="fas fa-"></i>Search</button>
      
    </form>
    </div>

    <div className="account">
      <h1>My account</h1>
    </div>
</nav>

<div style={{marginLeft:'100px'}} className="row"  data-aos="fade-right" data-aos-easing="ease-out-cubic">
 
  <div className="column">
    <div className="card">
      <p>Top Rated Products</p>..
 

      

      {
        
        topProducts.map(item=>{
          const {id, price,imageurl, productName} = item
          return(
            <div key={id}>
          <a className="list-group-item" href=""><i className=" me-3 text-danger"></i>{productName}<span className="woocommerce-Price-amount amount"><bdi>  <span className="woocommerce-Price-currencySymbol">&#36;</span>{price}</bdi></span>
          <img src={item.imageurl} alt='' width='20px' height='20px'/>
          </a>
          </div>
          
          )
        })}
      
      </div>
  
  </div>

  </div>



  <div style={{marginLeft:'100px'}} className="row"  data-aos="fade-right" data-aos-easing="ease-out-cubic">
  <div className="column">
    <div className="card" style={{marginTop:'-20%'}}>
      <p>Archives</p>
      <h1 style={{fontSize:'15px',  marginRight:'50%'}} className="fas fa-calendar"><a style={{textDecoration:'none', color:'black'}} href="">Calendar</a></h1>
      </div>
      </div>
      </div>

      <div style={{marginLeft:'100px'}} className="row"  data-aos="fade-right" data-aos-easing="ease-out-cubic">
      <div className="column">
    <div className="card" style={{marginTop:'-20%'}}>
      <p>Categories</p>
      <h1 style={{fontSize:'13px', marginRight:'50%'}} className="fas fa-file"><a style={{textDecoration:'none', color:'black'}} href="">Animals</a></h1>
      <h1 style={{fontSize:'13px', marginRight:'50%'}} className="fas fa-file"><a style={{textDecoration:'none', color:'black'}} href="">Cosmos</a></h1>
      <h1 style={{fontSize:'13px', marginRight:'50%'}} className="fas fa-file"><a style={{textDecoration:'none', color:'black'}} href="">Nature</a></h1>
      <h1 style={{fontSize:'13px', marginRight:'50%'}} className="fas fa-file"><a style={{textDecoration:'none', color:'black'}} href="">Other</a></h1>
      <h1 style={{fontSize:'13px', marginRight:'50%'}} className="fas fa-file"><a style={{textDecoration:'none', color:'black'}} href="">People</a></h1>
      </div>
      </div>
      </div>
</div>



  )
}

export default Search
