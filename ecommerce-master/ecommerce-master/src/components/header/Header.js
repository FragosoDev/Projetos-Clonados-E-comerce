import React from 'react'
import {  FaArrowAltCircleRight, FaEnvelopeOpenText, FaFacebook, FaInstagram,
   FaPhone, FaRegistered, FaShoppingCart, FaTwitter} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {

  const state = useSelector((state) => state.HandleCart)
  
  return (
    <div className='header'>
      <div className="container">
        <div className="top row">
          <div className='col'>
            <div className="topDiv">
              <FaPhone/>
              <span>+7495000-000-00</span>
            </div>
            <div className="topDiv">
              <FaEnvelopeOpenText />
              <span>ecommerce@react.com</span>
            </div>
          </div>
          <div className="col">
            <div className="topDiv">
            <Link to='/'><FaFacebook /></Link>
            <Link to='/'><FaInstagram /></Link>
            <Link to='/'><FaTwitter /></Link>
             
            </div>
          </div>
        </div>
        <div className="middle row">
          <div className="col">
            <Link to='/'><img src='../assets/images/logo.png' alt='logo'/></Link>
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/'>About</Link>
                </li>
                <li>
                  <Link to='/'>Contact</Link>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="col">
            <div className='buttons'>
              <Link to='/'><FaArrowAltCircleRight /> Login</Link>
              <Link to='/'><FaRegistered />Register</Link>
              <Link to='/cart'><FaShoppingCart />Cart({state.length})</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header