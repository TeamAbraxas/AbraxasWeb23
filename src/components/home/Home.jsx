import React from 'react'
import Menu from '../home/Menu'
import '../../styles/home/home.css'
import NimbusLogo from '../../assets/images/home/NimbusLogo.png';

const Home = () => {
  return (
    <div className='main-container'>

      <header className='homeHeader'>
          <nav className='header'>
            <a href='https://festnimbus.nith.ac.in/'><img src={NimbusLogo} alt="Nimbus Logo" width='345px' height='389px'
            className='nimbusLogo' /></a>
            <div className='teamAbraxas'>Team Abraxas</div>
          </nav>
          <Menu />
      </header>
    </div>
  )
}

export default Home
