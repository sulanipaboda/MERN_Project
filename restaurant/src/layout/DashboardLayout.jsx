import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { FaEdit, FaLocationArrow, FaPlusCircle, FaQuestionCircle, FaShoppingBag, FaUser } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import logo from '/logo.png'
import { FaCartShopping } from 'react-icons/fa6';

import Login from '../components/Login'
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const sharedLinks = (
  <>
    <li>
      <Link to="/"><MdSpaceDashboard />Home</Link>
    </li>
    <li>
      <Link to="/menu"><FaCartShopping />Menu</Link>
    </li>
    <li>
      <Link to="/"><FaLocationArrow />Orders Tracking</Link>
    </li>
    <li>
      <Link to="/"><FaQuestionCircle />Customer Support</Link>
    </li>
  </>
)

const DashboardLayout = () => {
  const {loading} = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin()

  return (
    <div>
      {
        isAdmin ? 
        <div className='bg-white '>
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
              {/* Page content here */}
              <div className='flex items-center justify-between mx-4'>
                <label htmlFor="my-drawer-2" className="btn bg-white border-none text-black  drawer-button lg:hidden">
                  <RiMenu2Fill />
                </label>
                <button className='btn rounded-full px-6 flex items-center gap-2 bg-orange text-white border-none sm:hidden'>Logout</button>
              </div>
              <div className='mt-5 md:mt-2 mx-4'>
              <Outlet />
              </div>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white"></label> 
              <ul className="menu p-4 w-80 min-h-full bg-gray-50 text-black">
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard" className='flex justify-start mb-3'>
                    <img src={logo} alt='' className='w-20' /><span className="badge badge-primary">Admin</span>
                  </Link>
                </li>
                <hr />
                <li className='mt-3'>
                  <Link to="/dashboard"><MdSpaceDashboard />Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard"><FaShoppingBag />Manage Bookings</Link>
                </li>
                <li>
                  <Link to="/dashboard"><FaPlusCircle />Add Menu</Link>
                </li>
                <li>
                  <Link to="/dashboard"><FaEdit />Manage Items</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/dashboard/users"><FaUser />All Users</Link>
                </li>

                <hr />
                {/* shared links */}
                {
                  sharedLinks
                }
              </ul>
            </div>
          </div>
        </div> : <Login />
          }
    </div>
  )
}

export default DashboardLayout
