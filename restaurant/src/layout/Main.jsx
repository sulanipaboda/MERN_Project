import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'

const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className='bg-primaryBG'>
      <div className='min-h-screen'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      {/* {
        loading ? <LoadingSpinner />: <div className='min-h-screen'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      } */}
    </div>
  )
}

export default Main
