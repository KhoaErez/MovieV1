import './App.scss'
import React from 'react'
import Header from './components/header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <Outlet />
        </div>
        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
