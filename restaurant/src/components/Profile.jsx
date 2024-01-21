import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={UserActivation.photoURL} alt="" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 x-1 z-[2] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Order</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
  </div>

  )
}

export default Profile
