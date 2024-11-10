import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaDownload } from "react-icons/fa6";

const Project2 = (props) => {
  const style = props.title != "food Recipes app" ? {} : {
    marginTop: '-15px'
  }
  return (
    <div className='scroll-section'>
        <img src={props.img} />
        <div className='scroll-section-title'>{props.name}</div>
        <div className='scroll-section-desc' style={{marginTop: '-5px'}}>{props.desc}</div>
        <div className="scroll-section-btns">
            <a href={props.github} target='_blank'>
                <div><AiFillGithub />Github</div>
            </a>
            <a href={props.file} download>
                <div><FaDownload />download apk</div>
            </a>
        </div>
    </div>
  )
}

export default Project2