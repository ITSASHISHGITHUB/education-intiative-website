import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { AiOutlineStar } from "react-icons/ai"
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct({ ...data, available: Math.random() < 0.5 });
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="container my-5 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="container my-5 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <img
              className="w-full"
              src={product.image}
              alt={product.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-span-1 py-5">
            <div className={`w-max px-2 rounded-full  text-black py-1 text-xs ${product.available ? "bg-emerald-500" : "bg-red-500"}`}>
              {product.available ? "In Stock" : "Out of stock"}
            </div>
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl">
              {product.rating && product.rating.rate}{" "}
              <AiOutlineStar />
            </p>
            <h3 className="text-2xl my-4">${product.price}</h3>
            <p className="text-xl">{product.description}</p>
            <button
              className="btn btn-outline-dark mt-4"
              onClick={() => product.available && addProduct(product)}
              disabled={!product.available}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3 mt-4">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const Loading2 = () => {
    return (
      <div className="my-4 py-4 flex">
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
      </div>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <div className="py-4 my-4 flex">
        {similarProducts.map((item) => {
          return (
            <div key={item.id} className="card mx-4 text-center">
              <img
                className="card-img-top p-3"
                src={item.image}
                alt="Card"
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title.substring(0, 15)}...
                </h5>
              </div>
              <div className="card-body">
                <Link
                  to={"/product/" + item.id}
                  className="btn btn-dark m-1"
                >
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="grid grid-cols-1 my-5 py-5">
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
