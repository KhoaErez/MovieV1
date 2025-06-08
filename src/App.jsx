import './App.scss'
import React from 'react'
import Header from './components/header/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <div className='main-container'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
