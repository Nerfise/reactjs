import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import {MdCastForEducation} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#work" onClick={() => setActiveNav('#work')}className={activeNav === '#work' ? 'active' : ''}><CgWorkAlt/></a>
      <a href="#education" onClick={() => setActiveNav('#education')}className={activeNav === '#education' ? 'active' : ''}><MdCastForEducation/></a>
    </nav>
  )
}

export default Nav