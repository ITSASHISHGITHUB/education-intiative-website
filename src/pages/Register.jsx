import React from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center text-2xl font-bold">Register</h1>
                <hr className="my-4" />
                <div className="flex items-center justify-center h-full">
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Name" className="block mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="block mb-1">Email address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="block mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <p>Already have an account? <Link to="/login" className="text-indigo-500 hover:underline">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="w-full py-2 text-white bg-gray-800 rounded-full hover:bg-gray-600" type="submit" disabled>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;
