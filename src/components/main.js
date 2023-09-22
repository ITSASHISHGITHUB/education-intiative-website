import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3 h-[600px]">
        <div className="bg-dark text-white border-0 mx-3 relative">
          <img
            className="object-cover w-full h-[600px]"
            src="./assets/main.png.jpg"
            alt="Card"
          />
          <div className="bg-opacity-50 flex items-center justify-center h-96 absolute top-1/2 left-10 -translate-y-1/2">
            <div className="container text-center">
              <h1 className="text-5xl font-light text-black">
                Welcome to Our E-commerce Store
              </h1>

              <p className="text-xl text-black hidden sm:block">
                Discover a wide range of products at great prices.
                <br />
                Shop with confidence and enjoy a seamless shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
