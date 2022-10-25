import React, {useEffect, useState} from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

useEffect(()=>{
  window.addEventListener('scroll', toggleVisible);
})



return (
<button>
     <MdKeyboardArrowUp onClick={scrollToTop} 
     className={visible ? 'scroll-up' : 'no-scroll'} />
    </button>

);
}

export default ScrollButton;
