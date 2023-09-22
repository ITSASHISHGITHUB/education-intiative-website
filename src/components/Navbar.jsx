import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    return (
        <nav className="bg-light py-3 sticky top-0 z-40 bg-white drop-shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink className="text-xl font-bold px-2" to="/"> E-commerce Cart System</NavLink>
                <button className="sm:hidden px-2 py-1" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="hidden sm:flex space-x-4">
                    <NavLink className="text-gray-600 hover:text-gray-900" to="/">Home</NavLink>
                    <NavLink className="text-gray-600 hover:text-gray-900" to="/product">Products</NavLink>
                    <NavLink className="text-gray-600 hover:text-gray-900" to="/about">About</NavLink>
                    <NavLink className="text-gray-600 hover:text-gray-900" to="/contact">Contact</NavLink>
                </div>
                <div className="space-x-6 flex items-center">
                    <NavLink to="/login" className="btn btn-outline-dark m-2">
                       Login
                    </NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark m-2">
                        Register
                    </NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark m-2 flex items-center text-rose-600">
                    <AiOutlineShoppingCart/> Cart ({state.length})
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
