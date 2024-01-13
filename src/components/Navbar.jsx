import React, { useContext, useEffect, useState } from "react";
import logo from "/images/logo.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import useCart from "../hooks/useCart";
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

  const [cart, refetch] = useCart();
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      if (offSet > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li
        onClick={() => {
          setActive("Home");
        }}
        className={`${active === "Home" ? "text-green" : "text-secondary"} `}
      >
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          Home
        </Link>
      </li>
      <li
        onClick={() => {
          setActive("Menu");
        }}
        className={`${active === "Menu" ? "text-green" : "text-secondary"} `}
      >
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li
              onClick={() => {
                setActive("All");
              }}
              className={`${
                active === "All" ? "text-green" : "text-secondary"
              } `}
            >
              <Link to={"/menu"}>All</Link>
            </li>
            <li
              onClick={() => {
                setActive("Salad");
              }}
              className={`${
                active === "Salad" ? "text-green" : "text-secondary"
              } `}
            >
              <p>Salad</p>
            </li>
            <li
              onClick={() => {
                setActive("Pizza");
              }}
              className={`${
                active === "Pizza" ? "text-green" : "text-secondary"
              } `}
            >
              <p>Pizza</p>
            </li>
          </ul>
        </details>
      </li>
      <li
        onClick={() => {
          setActive("Services");
        }}
        className={`${
          active === "Services" ? "text-green" : "text-secondary"
        } `}
      >
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li
              onClick={() => {
                setActive("Online order");
              }}
              className={`${
                active === "Online order" ? "text-green" : "text-secondary"
              } `}
            >
              <p>Online order</p>
            </li>
            <li
              onClick={() => {
                setActive("Table booking");
              }}
              className={`${
                active === "Table booking" ? "text-green" : "text-secondary"
              } `}
            >
              <p>Table booking</p>
            </li>
            <li
              onClick={() => {
                setActive("Order tracking");
              }}
              className={`${
                active === "Order tracking" ? "text-green" : "text-secondary"
              } `}
            >
              <p>Order tracking</p>
            </li>
          </ul>
        </details>
      </li>
      <li
        onClick={() => {
          setActive("Offers");
        }}
        className={`${active === "Offers" ? "text-green" : "text-secondary"} `}
      >
        <p>Offers</p>
      </li>
    </>
  );
  return (
    <header className="container max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* nav items */}
              {navItems}
            </ul>
          </div>
          <Link
            to={"/"}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p>
              <img src={logo} alt="" />
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* nav items */}
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* search icon */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* cart items */}
          <Link to="/cart-page">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  mr-3 hidden lg:flex items-center justify-center"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-green">
                  {cart.length || 0}
                </span>
              </div>
            </div>
          </Link>
          {/* login button */}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn bg-green rounded-full px-6 text-white flex items-center gap-2"
            >
              <FaRegUser /> Login
            </button>
          )}
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
