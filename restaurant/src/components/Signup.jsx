import React, { useContext } from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors} } = useForm();
    
    const {createUser, login} = useContext(AuthContext);

    //redirecting to home page or specific page
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password).then((result) => {
          // Signed up 
          const user = result.user;
          alert("Account Created Successfully!")
          document.getElementById('my_modal_5').close()
        navigate(from, {replace: true})
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
      }
  return (
    <div className='bg-white'>
        <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20'>
            <div className='modal-action flex flex-col justify-center mt-0'>
                {/* login form */}
                <form className="card-body method-dialog" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='font-bold text-lg text-center'>Sign Up</h3>
                    
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-gray-200" required {...register("email")} />
                    </div>

                    {/* password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered bg-gray-200" required {...register("password")} />
                        
                        <label className="label mt-1">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* login button */}
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" className="btn bg-orange border-none text-white" />
                    </div>
                    <p className='text-center my-2'>
                        Have an account?{" "} 
                        <button className='underline text-red ml-1'
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                        >
                            Login
                        </button>
                    </p>

                    {/* cancel button */}
                    <button 
                    htmlFor="my_modal_5"
                    onClick={() => document.getElementById('my_modal_5').close()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                
                {/* sign in options */}
                <div className='text-center space-x-3 mb-5'>
                    <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white'>
                        <FaGoogle />
                    </button>
                    <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white'>
                        <FaFacebookF />
                    </button>
                    <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white'>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
        <Modal />
    </div>
  )
}

export default Signup
