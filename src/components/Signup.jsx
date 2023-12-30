/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, signUpWithGmail, updateUserProfile } =
    useContext(AuthContext);
  //redirect to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        updateUserProfile(data.email, data.photoURL).then(() => {
          const userInfor = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfor).then((response) => {
            // console.log(response);
            // alert("Signin successful!");
            // navigate(from, { replace: true });
            Swal.fire({
              title: "Logged In Successfully!",
              icon: "success",
            });
            document.getElementById("my_modal_5").close();
            navigate(from, { replace: true });
          });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // login with google
  // const handleRegister = () => {
  //   signUpWithGmail()
  //     .then((result) => {
  //       const user = result.user;
  //       const userInfor = {
  //         name: result?.user?.displayName,
  //         email: result?.user?.email,
  //       };
  //       axiosPublic.post("/users", userInfor).then((response) => {
  //         // console.log(response);
  //         alert("Signin successful!");
  //         navigate("/");
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/users", userInfor).then((response) => {
          console.log(response);
          Swal.fire({
            title: "Logged In Successfully!",
            icon: "success",
          });
          document.getElementById("my_modal_5").close();
          navigate(from, { replace: true });
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="max-w-md  shadow w-full mx-auto my-20 flex justify-center items-center 
    bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% "
    >
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create an Account!</h3>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {/* email */}
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* error text */}

          {/* login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign up"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center my-2">
            Have an acccount?
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="underline text-red ml-1"
            >
              Login
            </button>
          </p>
          <Link
            to={"/"}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>
        {/* social button */}
        <div className="text-center space-x-3 mb-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle hover:bg-green hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
