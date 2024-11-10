import React from 'react'

const Skills = (props) => {
  return (
    <div ref={props.skills} style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>Skills<div></div></div>
    </div>
  )
}

export default Skills