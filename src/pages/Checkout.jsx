import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft,} from "react-icons/ai"

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="flex flex-col items-center py-5 bg-gray-100">
          <h4 className="p-3 text-2xl">No item in Cart</h4>
          <Link
            to="/"
            className="px-4 py-2 mt-4 text-white bg-gray-800 rounded-full hover:bg-gray-600"
          >
            <AiOutlineArrowLeft/> Continue Shopping
          </Link>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <div className="bg-white shadow-md rounded-lg">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h5 className="mb-0 text-2xl">Order Summary</h5>
                </div>
                <div className="px-4 py-3 border-b border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    <li className="flex justify-between py-2">
                      <span>Products ({totalItems})</span>
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </li>
                  </ul>
                </div>
                <div className="px-4 py-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total amount</span>
                    <span>${Math.round(subtotal + shipping)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-white shadow-md rounded-lg">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="mb-0 text-2xl">Billing address</h4>
                </div>
                <div className="px-4 py-3">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="1234 Main St"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address2" className="block mb-1">
                        Address 2 (Optional)
                      </label>
                      <input
                        type="text"
                        id="address2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="state" className="block mb-1">
                        State
                      </label>
                      <select
                        id="state"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Punjab</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block mb-1">
                        Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-md rounded-lg">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="mb-0 text-2xl">Payment</h4>
                </div>
                <div className="px-4 py-3">
                  <form>
                    <div>
                      <label htmlFor="cc-name" className="block mb-1">
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="cc-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                    </div>
                    <div>
                      <label htmlFor="cc-number" className="block mb-1">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        id="cc-number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cc-expiration" className="block mb-1">
                          Expiration
                        </label>
                        <input
                          type="text"
                          id="cc-expiration"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cc-cvv" className="block mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cc-cvv"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <button
                      className="w-full py-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-700"
                      type="submit"
                      disabled
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-2xl font-bold">Checkout</h1>
        <hr className="my-4" />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
