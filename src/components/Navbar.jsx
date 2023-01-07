import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="navbarcontainer">
        <div className="logocontainer">
          <span className='company-logo'><span>=</span></span>
          Pepper
        </div>
        <div className="pageslinkcontainer">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="rightnavbaritems">
          <span>
            <a href=""><ShoppingCartIcon/> Cart</a>
          </span>
          <a href="#" className='btn'>Login</a>
          <a href="#" className='btn-filled btn'>Get Started</a>
        </div>
    </div>
  )
}

export default Navbar
