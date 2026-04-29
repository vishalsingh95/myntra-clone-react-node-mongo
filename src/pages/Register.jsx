import "./Auth.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "./Styles.css";
import React from "react";


const Register = () => {
  return (
    <>
    <Navbar />
    <div className="auth-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 rounded-lg shadow-md ">
      <div className="auth-container-content bg-gray-100 min-h-screen">
        <div className="auth-container-content-item bg-gray-100 min-h-screen">
          <div className="auth-container-content-item-text">
            <h2 className="text-2xl font-bold mb-4 ">Register</h2>
          </div>
        </div>
      </div>
      
      <div className="auth-container-content-item bg-gray-100 min-h-screen">
        <div className="auth-container-content-item-text bg-gray-100 min-h-screen">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Register
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => alert("Redirect to Login")}>
              Login
            </span>
          </p>
          <p className="text-gray-600 mt-4">This is the registration page.</p>
          </div>
        </div>
      </div>
  
    <Footer />
    </>
  );
};

export default Register;
