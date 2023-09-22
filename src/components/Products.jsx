import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [productIdToShowAlert, setProductIdToShowAlert] = useState(null);

  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setProductIdToShowAlert(product.id);
    showSuccessAlert();
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const fetchedData = await response.clone().json();

        // Add the "available" key with a boolean value to each object
        const dataWithAvailability = fetchedData.map((item) => ({
          ...item,
          available: Math.random() < 0.5,
        }));

        setData(dataWithAvailability);
        setFilter(dataWithAvailability);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);


  const showSuccessAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide the alert after 3 seconds
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="flex justify-center py-5">
          <button
            className="btn m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn m-2 "
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {filter.map((product) => {
            return (
              <div
                id={product.id}
                key={product.id}
                className=" mb-4"
              >
                <div className="card text-center h-96 flex flex-col" key={product.id}>
                  <img
                    className="card-img-top p-3 max-h-64 aspect-square justify-self-center"
                    src={product.image}
                    alt="Product"
                  />
                  <div className="card-body">
                    <div className={`w-1/3 px-2 rounded-full  text-black py-1 text-xs ${product.available ? "bg-emerald-500" : "bg-red-500"}`}>
                      {product.available ? "In Stock" : "Out of stock"}
                    </div>
                    <h5 className={`card-title font-bold text-lg  text-left truncate`}>{product.title}</h5>
                    <p className="card-text truncate line-clamp-3 w-full whitespace-pre">
                      {product.description}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">$ {product.price}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/product/" + product.id} className={`btn btn-dark m-1`}>
                      Buy Now
                    </Link>
                    <button
                      className={`btn btn-dark m-1 ${!product.available && "bg-gray-200"}`}
                      onClick={() => {
                        product.available && addProduct(product);
                      }}
                      disabled={!product.available}
                    >
                      Add to Cart
                    </button>
                    {/* {showAlert && productIdToShowAlert === product.id && (
                    <div className="alert alert-success">
                      Success! "{product.title}" has been added to the cart.
                    </div>
                  )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3 mx-auto">
        <div className=" ">
          <div className="w-full flex items-center flex-col">
            {showAlert && (
              <div className="alert alert-success w-1/3 self-center px-3">
                Success! The product has been added to the cart.
              </div>
            )}
            <h2 className="text-center text-3xl font-bold">Latest Products</h2>
            <hr className="my-4" />
          </div>
        </div>
        <div className="row justify-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  )
}

export default Products
