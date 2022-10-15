import React, { useState, useEffect} from 'react'
import { Link, useNavigate , useLocation } from 'react-router-dom'
import './css/style.css'
 import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md'
 import {BsThreeDots, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
 import {CgMenuGridR}  from 'react-icons/cg'
 import {IoMdClose} from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
 

const AlbumCarousel = () => {
  const location = useLocation();
  const navigate =  useNavigate();
  const { pictures, currIndex } = location.state;
  const [index, setIndex] = useState(currIndex)
  const [showLess, setShowLess] = useState(false)
  const [play, setPlay] = useState(false)
  const [filled, setFilled] = useState(0);

	useEffect(() => {
		if (filled < 100 && play) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, play])



   const changeIndex = (currValue) => {
      setIndex(currValue)
   }

   const changeState = () =>{
    setShowLess(!showLess)
   }

    const changePlay = () =>{
      console.log('clicked')
      setPlay(!play)
    
   }

   useEffect(() => {
    AOS.init({
      duration: 2000
    }, [])
  })

useEffect(() => {
    if(play){
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > pictures.length - 1) {
          index = 0
        }
        return index
      })
      setFilled(0)
    }, 3000)
  
    return () => {
      clearInterval(slider)
    }
  
  }
  }, [index, play, pictures.length])


   const {image} = pictures[index]

  return (
      <div className='main-album'>
        {/* Carousel */}
      <section className='modal-container'>
      <div className={showLess ? 'full-carousel':'carousel-container'}>
      <img src={image} className='carousel-image'
      data-aos="fade-left"
      alt='modal'/>
      </div>
      {/* Close button */}
      <IoMdClose className='dismiss' onClick={()=> navigate(-1)}/>
    
    {/* previous and next button */}
     <MdNavigateBefore className={index === 0 ? 'hide navigate' : 'prev navigate'} onClick={()=>{setIndex(index-1)}}/>
     <MdNavigateNext className={index === (pictures.length -1) ? 'hide navigate' : 'next navigate'} 
     onClick={()=>{setIndex(index+1)}}/>
     </section>

      {/* Progress Bar */}
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "rgb(163, 159, 159)",
				  transition:"width 0.03s"
			  }}></div>
		  </div>


    {/* Buttons */}
     <div className='album-btns'>
      <button onClick={changePlay}>
      {play? <BsFillPauseFill /> : <BsFillPlayFill />}
      </button>
      <Link to='/albumcarousel/big-album'>
      <button>
      <CgMenuGridR />
      </button>
      </Link>
      <button onClick={changeState}>
      <BsThreeDots />
      </button>
      </div>


      {/* Album at the bottom */}
     <section className={showLess ? 'hide-album':'album-footer'}>
     {pictures.map((item, value)=>{
        return(
          <div key={item.id}>
            <img src={item.image} alt='item' className='small-img'
            onClick={()=>{changeIndex(value)}}/>
          </div>
        )
      })}
      </section>
     </div>
  )
}

export default AlbumCarousel