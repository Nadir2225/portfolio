import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Resume from './sections/resume'
import Contact from './sections/contact'
import Header from './components/header'
import { ToastContainer } from 'react-toastify'

function App() {
  const pages = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  }

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      // top: ref.current.offsetTop - 68,
      behavior: "smooth",
    });
  };

  return (
    <div className={`app`}>
      <Header pages={pages} scrollDown={scrollDown} />
      <Home contact={pages.contact} home={pages.home} />
      <About about={pages.about} />
      <Skills skills={pages.skills} />
      <Projects projects={pages.projects} />
      <Resume resume={pages.resume} />
      <Contact contact={pages.contact} />
    </div>
  )
}

export default App
