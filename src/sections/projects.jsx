import React from 'react'
import ScrollSection from '../components/ScrollSection'

const Projects = (props) => {
  return (
    <div className='projects' ref={props.projects}>
      <div className='titles'>Projects <div></div></div>
      <ScrollSection />
    </div>
  )
}

export default Projects