import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <h1 className='footer-logo'>Coffe<span>Co</span></h1>
      <div className='footer-wrapper'>
        <ul>
          <li><a>Facebook</a></li>
          <li><a>Instagram</a></li>
          <li><a>Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer