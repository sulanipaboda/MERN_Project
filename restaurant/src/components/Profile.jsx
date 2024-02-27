import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                {
                    user.photoURL ? <img
                        alt=""
                        src={user.photoURL}
                    /> : <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                }
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 x-1 z-[2] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                <li className='bg-white'><a href="update-profile">Profile</a></li>
                <li><a href='/order'>Order</a></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><a>Settings</a></li>
                <li className='bg-white'><a onClick={handleLogout}>Logout</a></li>
            </ul>
        </div>
  </div>

  )
}

export default Profile
