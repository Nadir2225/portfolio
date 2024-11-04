import React from 'react'
import { Particlesbg } from '../components/particlesbg'

const Home = () => {
  return (
    <div className='home'>
        <Particlesbg />
        <div className='home-content'>
            <div className='home-title'>
                Hi, I'm <p className='ma-name'>Nadir El Ouadghiri</p>
            </div>
            <div style={{fontWeight: '500', fontSize: '1.3em', marginBottom: '15px'}}>Software developer</div>
            <div className='home-button'>
                Contact me
            </div>
        </div>
    </div>
  )
}

export default Home