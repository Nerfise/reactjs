import React from 'react'
import './Work.css'
import IMG1 from '../../assets/work 3.png'
import IMG2 from '../../assets/work 2.png'
import IMG3 from '../../assets/work 1.png'




const Work = () => {
  return (
    <section id='work'>
      <h5>2022-2023</h5>
      <h2>My Recent Work</h2>

      <div className="container work__container">
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Food | Mobile App</h3>
          <small>This is a functional ordering Food website that i created this year</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>FoodHub | Website</h3>
          <small>A FoodHub website is simple and non-funtional website that i creat using visual studio code.</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3> CITE | Mobile App</h3>
          <small>This website is the project that we created last year with my groupmates this is a history of Cite event during 2022</small>
        </article>
      </div>
    </section>
    
    

  )
}

export default Work