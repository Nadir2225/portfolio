import React from 'react'
import { Particlesbg } from '../components/particlesbg'
import Retyped from '../components/retyped'

const Home = (props) => {
    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop - 68,
          behavior: "smooth",
        });
    }
    return (
      <div ref={props.home} className='home'>
          <Particlesbg />
          <div className='home-content'>
              <div className='home-title'>
                  Hi, I'm <p className='ma-name'>Nadir El Ouadghiri</p>
              </div>
              <div>Software developer</div>
              <Retyped style={{marginBottom: '25px', lineHeight: '1rem'}} />
              <div className='home-button' onClick={() => scrollDown(props.contact)}>
                  Contact me
              </div>
          </div>
      </div>
    )
}

export default Home