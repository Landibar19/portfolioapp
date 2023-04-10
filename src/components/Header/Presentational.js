import './Styles.scss'
import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Header = () => {
  
  const [showMenu, setShowMenu ] = useState(false)
  const menuToggle = () => setShowMenu(!showMenu)
  return (

    <div className='header'>
      <div className='header_content'>
        <div>
          <span className='logo'>Lizander</span>
        </div>
        <div>
          <nav className={`${`nav`} ${showMenu ? [`nav--open`]: {}}`}>
            <a className='nav_item' href="/home">Home</a>
            <a className='nav_item' href="/portfolio">Portfolio</a>
            <a className='nav_item' href="/about">About</a>
            <a className='nav_item' href="/contact">Contact</a>
            <div className='nav_button_container'>
              <Button/>
            </div>
          </nav>
        </div>
        <div>
          <div className='header_button'>
              <Button/>
          </div>
          <button className='header_toggler' onClick={menuToggle}>
            {!showMenu ? <BiMenuAltRight/> : <AiOutlineCloseCircle />}
          </button>
        </div>
      </div>
      
    </div>
  )
}


const Button = () => {
    return <button className='button'>Click me</button>
}

export default Header;
