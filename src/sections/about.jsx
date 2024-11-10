import React from 'react'

const About = (props) => {
  return (
    <div ref={props.about} style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>About<div></div></div>
        <div style={{width: '500px'}}>
          Hello! I'm Nadir El Ouadghiri, a versatile software developer skilled in full-stack web development, Android application development, and game development. With a passion for crafting engaging and intuitive user experiences, I enjoy taking on challenges across different domains—whether it's building seamless web applications, designing native mobile apps, or creating interactive 2D games. My expertise spans both front-end and back-end technologies, as well as game development engines, and I constantly seek new ways to improve my skills and explore innovative solutions. Feel free to explore my work or reach out to discuss potential collaborations!
        </div>
    </div>
  )
}

export default About