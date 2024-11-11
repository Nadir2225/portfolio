import React from 'react';
import pdf from '../assets/cv.jpg';
import { FaDownload } from 'react-icons/fa6';

const Resume = (props) => {
  return (
    <div ref={props.resume} style={{width: '100%', minHeight: '100vh'}}>
        <div className='ms-5 titles' style={{ display: 'flex', gap: '10px'}}>Resume<div></div></div>
        <div className='d-flex gap-4 justify-content-center align-items-center flex-column' style={{ width: '100%' }}>
          <img src={pdf} style={{ width: '95%', maxWidth: '400px' }} />
          <div >
            <a href="/files/cv.pdf" style={{ textDecoration: 'none' }} download>
                <div className='home-button'><FaDownload />download CV</div>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Resume