import React from 'react'
import ScrollSection from '../components/ScrollSection'

const Projects = (props) => {
  return (
    <div className='projects' ref={props.projects}>
      <div className='titles' style={{ display: 'flex', gap: '10px', lineHeight: '1.4rem'}}>Recent <p style={{color: '#24b6e2'}}>Projects</p> <div></div></div>
      <ScrollSection />
    </div>
  )
}

export default Projects