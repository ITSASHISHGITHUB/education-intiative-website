import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <hr className="my-4" />
        <div className="flex items-center justify-center h-full">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <form>
              <div className="mb-3">
                <label htmlFor="Email" className="block mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <p>New Here? <Link to="/register" className="text-indigo-500 hover:underline">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="w-full py-2 text-white bg-gray-800 rounded-full hover:bg-gray-600" type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
