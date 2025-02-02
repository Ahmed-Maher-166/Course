import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgbrand from "../assets/GamalTech.webp";
import { registerUser, loginUser } from "../Redux/action"; 
function Navbar() {
  const [showSign, setShowSign] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const user = useSelector((state) => state.user); 
  const dispatch = useDispatch(); 

  const handleLogin = (email, password) => {
    const userData = { email, password }; 
    dispatch(loginUser(userData));
    setShowSign(false);
  };

  const handleRegister = (name, email, password) => {
    const userData = { name, email, password };  
    dispatch(registerUser(userData));  
    setShowRegister(false); 
  };

  return (
    <div className="container-fluid">
      <div className="container mt-2">
        <div className="d-none navbar d-md-flex justify-content-between align-items-center py-2">
          <div className="col-md-3">
            <img
              draggable="false"
              src={imgbrand}
              alt="imgbrand"
              className="d-inline-block align-text-top"
            />
          </div>
          <div className="col-md-9">
            <ul className="nav justify-content-end fs-5 my-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/course">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact
                </a>
              </li>
              {!user ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{ backgroundColor: "white", borderRadius: "50px" }}
                    onClick={() => setShowSign(true)}
                  >
                    Sign Up
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <span className="nav-link text-white">Welcome, {user.name}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="d-md-none d-flex navbar flex-column py-2">
          <div className="col-12 d-flex justify-content-between">
            <nav className="navbar flex-grow-1 navbar-expand-lg navbar-light">
              <img draggable="false" src={imgbrand} alt="imgbrand" className="d-inline-block align-text-top" />
            </nav>
            <nav className="navbar flex-shrink-0 navbar-dark ms-auto">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          </div>
          <div className="col-12">
            <div className="collapse navbarsmall pt-3" id="navbarToggleExternalContent">
              <div className="bg-white p-0 p-md-4">
                <ul className="nav flex-column  my-auto px-auto">
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/course">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact</a>
              </li>
              {!user ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{ backgroundColor: "white", borderRadius: "50px" }}
                    onClick={() => setShowSign(true)}
                  >
                    Sign Up
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <span className="nav-link text-black">Welcome,{user.name}</span>
                </li>
              )}
                </ul>
              </div>
            </div>
          </div>
        </div>
   
      </div>

      {showSign && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
          <div className="col-md-4 mx-auto mt-5">
            <div className="text-white" style={{ backgroundColor: "rgba(0,0,0,.6)" }}>
              <div className="modal-header">
                <h4 className="modal-title text-center">Login or Sign Up to Start Learning</h4>
                <button
                  type="button"
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={() => setShowSign(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    What's your e-mail?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Your password?
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  onClick={() => handleLogin(document.getElementById("loginEmail").value, document.getElementById("loginPassword").value)}
                >
                  Login
                </button>
              </div>
              <div className="modal-footer">
                <div className="row w-100">
                  <div className="col-md-6 text-start">
                    <a onClick={() => { setShowSign(false); setShowRegister(true); }}>
                      Create Account
                    </a>
                  </div>
                  <div className="col-md-6 text-end">
                    <a onClick={() => { setShowSign(false); setShowForgotPasswordModal(true); }}>
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
          <div className="col-md-4 mx-auto mt-5">
            <div className="text-white" style={{ backgroundColor: "rgba(0,0,0,.6)" }}>
              <div className="modal-header">
                <h4 className="modal-title text-center">Create a New Account</h4>
                <button
                  type="button"
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={() => setShowRegister(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerName"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    What's your e-mail?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">
                    Your password?
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  onClick={() => handleRegister(
                    document.getElementById("registerName").value,
                    document.getElementById("registerEmail").value,
                    document.getElementById("registerPassword").value
                  )}
                >
                  Register
                </button>
              </div>
              <div className="modal-footer">
                <div className="row w-100">
                  <div className="col-md-6 text-start">
                    <a onClick={() => { setShowSign(true); setShowRegister(false); setShowForgotPasswordModal(false); }}>
                      Sign in with your account
                    </a>
                  </div>
                  <div className="col-md-6 text-end">
                    <a onClick={() => { setShowSign(false); setShowRegister(false); setShowForgotPasswordModal(true); }}>
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showForgotPasswordModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
          <div className="col-md-4 mx-auto mt-5">
            <div className="text-white" style={{ backgroundColor: "rgba(0,0,0,.6)" }}>
              <div className="modal-header">
                <h4 className="modal-title text-center">Reset Your Password</h4>
                <button
                  type="button"
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={() => setShowForgotPasswordModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="forgotEmail" className="form-label">
                    What's your e-mail?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="forgotEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <button type="button" className="btn btn-secondary col-12">
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
