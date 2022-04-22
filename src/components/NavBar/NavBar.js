import './NavBar.scss';
import React from 'react'
import rocketChatLogo from '../../assets/images/rocketChat.png'

const NavBar = () => {
  return (
	<div className = 'NavBar'>
		<img className='rcLogo'src={rocketChatLogo}/>
		<div className='divider'/>
		<p className='playground'>{'<Playground />'}</p>
	</div>
  )
}

export default NavBar