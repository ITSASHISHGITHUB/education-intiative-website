import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, deleteItem } from "../redux/action";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai"

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="grid grid-cols-1 place-items-center py-5 bg-light">
          <h4 className="p-3 text-3xl">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4 flex items-center py-3">
            <AiOutlineArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(removeCart(product));
  };

  const deleteCompleteItem = (product) => {
    dispatch(deleteItem(product))
  }

  const ShowCart = () => {
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
        <section className="h-full mx-auto w-full">
          <div className="container py-5 mx-auto w-full">
            <div className="flex justify-between my-4">
              <div className="max-w-md">
                <div className="bg-white border rounded shadow-md mb-4">
                  <div className="p-4 bg-blue-100">
                    <h5 className="mb-0 text-2xl">Item List</h5>
                  </div>
                  <div className="p-4">
                    {state.map((item) => {
                      return (
                        <div key={item.id} className="flex flex-col mb-4 border-b last-of-type:border-none">
                          <article className="flex items-center">
                            <div className="w-20">
                              <div className="bg-cover bg-center rounded">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-20"
                                />
                              </div>
                            </div>
                            <div className="flex-1 ml-4">
                              <p className="font-semibold">{item.title}</p>
                            </div>
                          </article>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                className="btn px-3"
                                onClick={() => {
                                  removeItem(item);
                                }}
                              >
                                <AiOutlineMinus />
                              </button>
                              <p className="m-5">{item.qty}</p>
                              <button
                                className="btn px-3"
                                onClick={() => {
                                  addItem(item);
                                }}
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                            <button className="btn"
                              onClick={() => { deleteCompleteItem(item) }}
                            >
                              <AiOutlineDelete />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="max-w-md w-1/3 ">
                <div className="bg-white border rounded shadow-md mb-4">
                  <div className="p-4 bg-blue-100">
                    <h5 className="mb-0 text-2xl">Order Summary</h5>
                  </div>
                  <div className="p-4">
                    <ul className="list-group list-group-flush">
                      <li className="flex justify-between items-center border-b py-2">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="flex justify-between items-center border-b py-2">
                        Shipping<span>${shipping}</span>
                      </li>
                      <li className="flex justify-between items-center py-2">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block mt-4"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 w-full mx-auto">
        <h1 className="text-left text-lg md:text-6xl font-semibold">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
