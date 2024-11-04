import { useState } from 'react'
import './App.css'
import Home from './sections/home'
import About from './sections/about'
import Header from './components/header'

function App() {

  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App
