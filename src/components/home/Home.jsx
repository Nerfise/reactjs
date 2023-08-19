import React from 'react'
import './Home.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HomeSocials from './HomeSocials'


const Home = () => {
  return (
    <header>
      <div className="container home__container" id='home'>
        <h5>Hello! I'm</h5>
        <h1>Gabriel Nipal</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HomeSocials />

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
          <a href="#education" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Home