import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signUpWithGmail, login} = useAuth();
    const [errorMsg, setErrorMsg] = useState("")
    const axiosPublic = useAxiosPublic();

    //redirecting to home page or specific page
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm(); // Get the handleSubmit function

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            const userInfor = {
                name: data.name,
                email: data.email,
            };
            axiosPublic
            .post("/users", userInfor)
            .then((response) => {
                // console.log(response);
                alert("Signed in Successfully!");
                navigate(from, {replace: true});
            });
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMsg("Please provide correct email and password") // Fix typo here
        });
        reset()
    }

    // login with google
    const handleRegister = () => {
        signUpWithGmail()
        .then((result) => {
            const user = result.user;
            const userInfor = {
            name: result?.user?.displayName,
            email: result?.user?.email,
            };
            axiosPublic
            .post("/users", userInfor)
            .then((response) => {
                // console.log(response);
                alert("Signed in Successfully!");
                navigate(from, {replace: true});
            });
        })
        .catch((error) => console.log(error));
    };

  return (
    <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20'>
        <div className='mb-5'>
            {/* login form */}
            <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-bold text-lg'>Please Login!</h3>
                
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

                {/* error */}
                {
                    errorMsg ? <p className='text-red text-xs italic'>{errorMsg}</p> : ""
                }

                {/* login button */}
                <div className="form-control mt-4">
                    <input type="submit" value="Login" className="btn bg-orange border-none text-white" />
                </div>
                <p className='text-center my-2'>Do not have an account? <Link to='/signup' className='underline text-red ml-1'>Sign Up Now</Link></p>
            
                {/* cancel button */}
                <Link
                to="/"
                onClick={() => document.getElementById('my_modal_5').close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </Link>
            </form>
            
            {/* sign in options */}
            <div className='text-center space-x-3 mb-5'>
                <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none' onClick={handleRegister}>
                    <FaGoogle />
                </button>
                <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none'>
                    <FaFacebookF />
                </button>
                <button className='btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none'>
                    <FaGithub />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login
