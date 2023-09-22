import React from 'react';
import { Footer, Navbar } from '../components';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-3 py-3">
        <h1 className="text-center text-2xl font-bold">About Us</h1>
        <hr className="my-4" />
        <p className="text-center text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center text-2xl py-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="object-cover w-full h-40"
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="p-4">
              <h5 className="text-center text-lg font-semibold">Men's Clothing</h5>
            </div>
          </div>
          {/* Repeat the above card code for other product categories */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
