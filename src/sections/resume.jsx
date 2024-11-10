import React from 'react'

const Resume = (props) => {
  return (
    <div ref={props.resume} style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>Resume<div></div></div>
    </div>
  )
}

export default Resume