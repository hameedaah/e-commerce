import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

const PageNotFound = () => {
  return (
    <div className='error-page'>
        <h2>404 Error</h2>
        <p>Page Not Found</p>
        <Link to="/">Go back to the home page</Link>
    </div>
  )
}

export default PageNotFound