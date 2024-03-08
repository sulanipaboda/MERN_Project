
import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Signup = () => {
  const {signUpWithGmail, createUser, updateUserProfile} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // redirecting to home page or specific  page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      // Signed up 
      const user = result.user;
      updateUserProfile(data.email, data.photoURL)
        .then(() => {
          const userInfor = {
            name: data.name,
            email: data.email,
          }
          axiosPublic.post('/users', useuserInforrInfo)
            .then((response) => {
              alert("Account creation successfully done!");
              document.getElementById("my_modal_5").close();
              navigate(from, {replace: true});
            })
        })
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  };

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
            navigate("/");
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
          <h3 className="font-bold text-lg">Create an Account!</h3>

          {/* name */}   
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered  bg-gray-200"
              {...register("name")}
            />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered  bg-gray-200"
              {...register("email")}
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered  bg-gray-200"
              {...register("password")}
            />
            {/* <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>

          {/* error */}

          {/* login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-orange border-none text-white"
            />
          </div>

          <p className="text-center my-2">
            Have an account?{" "}
            <button className="underline text-red ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>{" "}
          </p>

          <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</Link>
        </form>

        {/* social sign in */}
        <div className="text-center space-x-3 mb-5">
          <button 
            onClick={handleRegister}
            className="btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none">
            <FaGoogle />
          </button>
          <button className="btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle bg-gray-200 border-none hover:bg-orange hover:text-white hover:border-none">
          <FaGithub />
          </button>
        </div>
      </div>
        <Modal/>
    </div>
  )
}

export default Signup
