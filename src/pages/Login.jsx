import { useContext, useState } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Styles.css";



const Login = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.token);
      alert("Login Successful");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  let token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <Navbar />
        <main className="login-page">
          <div className="login-hero">
            <h1>Login</h1>
            <p>Login to your account</p>
          </div>
          <div className="login-block">
            <div className="login-block-content">
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
                Already Logged In
              </h2>
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
            Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-pink-600 text-white py-2 rounded font-medium hover:bg-pink-700 transition"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span className="text-pink-600 cursor-pointer " onClick={() => alert("Redirect to Register")}>
              Register
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
