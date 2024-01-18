import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div className='bg-primaryBG'>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
