import { React, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from "react-icons";
import './Navbar.css'

const Navbar = () => {

  const [icon, setIcon] = useState(false);

  const activeDropdown = () => {
    const navBar = document.querySelector('.nav-list');
    navBar.classList.toggle('active');
    setIcon(!icon);
  }

  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1>Coffe<span>Co</span></h1>
        </div>
        <div className='hamburger' onClick={() => activeDropdown()}>
          <IconContext.Provider value={{ className: 'line' }}>{icon ? <FaTimes /> : <FaBars />}</IconContext.Provider>
        </div>
        <div className='nav-list'>
            <ul>
                <li><a href='#profile'>Profil</a></li>
                <li><a href='#product'>Produk</a></li>
                <li><a href='#place'>Tempat dan Suasana</a></li>
                <li><a href='#map'>Peta</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar