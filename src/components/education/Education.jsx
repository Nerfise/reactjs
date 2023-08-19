import React from 'react'
import './Education.css'
import ME from '../../assets/me.jpg'
import {FaSchool} from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io5'

const Education = () => {
  return (
    <section id='education'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container education__container">
        <div className="education__me">
          <div className="education__me-image">
            <img src={ME} alt="Education Image"/>
          </div>
        </div>

        <div className="education__content">
            <div className="education__cards">
              <article className='education__card'>
                <FaSchool className='education__icon'/>
                <h5>School</h5>
                <small>University Of Pangasinan</small>
              </article>
              <article className='education__card'>
                <IoSchoolOutline className='education__icon'/>
                <h5>Undergraduate</h5>
                <small>3rd year college | 2023-2024</small>
              </article>
            </div>
            <p>I'm currently studying Information Technology. I graduate in Junior High School during 2018-2019 S.Y. in Bued National High School and i Graduate in Senior High School During 2020-2021 S.Y. in 
Calasiao Comprehensive National High School  and now I am currently 3rd year student at University of Pangasian. </p>
        </div>
      </div>
    </section>
  )
}

export default Education