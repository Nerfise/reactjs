import React from 'react'
import Logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <img className='footer__image' src={Logo} alt="" />
    <div className='footer__logo'>Phinma- University of Pangasinan</div>
    <div className='footer__school_name'>
    <small>College of Information Technology</small></div>
    <div className="footer__copyright">
      <small>&copy;Gabriel Nipal</small>
      </div>
  </footer>
  )
}

export default Footer
